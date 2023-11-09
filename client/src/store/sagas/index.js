import {
	take,
	call,
	put,
	fork,
	takeEvery,
	cancelled,
	select,
	delay,
} from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import WebSocket from "isomorphic-ws";

import { connectToWebSocket, webSocket } from "services";

import { ChatRoomsName } from "../../globalConstants";
import { getChatRoomName } from "hooks";
import {
	setBackendChatRoom,
	setFrontendChatRoom,
	setQaChatRoom,
} from "../actions/actionCreator";
import { SET_LOADING_DATA } from "../constants";

function* manageWebSocketConnection() {
	let shouldReconnect = true;

	while (shouldReconnect) {
		const channel = yield call(connectToWebSocket);
		yield put({ type: SET_LOADING_DATA, payload: true });
		try {
			while (true) {
				const action = yield take(channel);
				if (action.type === "RECEIVE_MESSAGE") {
					const { type, room, messages } = action.payload;

					if (type === "history") {
						if (room === ChatRoomsName.BACKEND_SUPPORT) {
							yield put(setBackendChatRoom({ messages, room }));
						} else if (room === ChatRoomsName.FRONTEND_SUPPORT) {
							yield put(setFrontendChatRoom({ messages, room }));
						} else if (room === ChatRoomsName.QA_SUPPORT) {
							yield put(setQaChatRoom({ messages, room }));
						}
					} else if (type === "message") {
						if (room === ChatRoomsName.BACKEND_SUPPORT) {
							yield put(
								setBackendChatRoom({
									messages: [action.payload],
								}),
							);
						} else if (room === ChatRoomsName.FRONTEND_SUPPORT) {
							yield put(
								setFrontendChatRoom({
									messages: [action.payload],
								}),
							);
						} else if (room === ChatRoomsName.QA_SUPPORT) {
							yield put(
								setQaChatRoom({ messages: [action.payload] }),
							);
						}
					} else return;

					yield put({ type: SET_LOADING_DATA, payload: false });
				}
			}
		} catch (error) {
			console.error("WebSocket error:", error);
		} finally {
			if (yield cancelled()) {
				channel.close();
				shouldReconnect = false;
			} else {
				// Reconnect
				yield put({ type: "WEBSOCKET_DISCONNECTED" });
				yield delay(4000);
			}

			yield put({ type: SET_LOADING_DATA, payload: false });
		}
	}
}

export function* handleLocationChange() {
	const pathname = yield select(({ router }) => router.location.pathname);

	if (webSocket && webSocket.readyState === WebSocket.OPEN) {
		const room = getChatRoomName(pathname);

		if (room) {
			webSocket.send(JSON.stringify({ type: "joinRoom", room }));
		}
	}
}

function* watchLocationChange() {
	yield takeEvery(LOCATION_CHANGE, handleLocationChange);
}

export default function* rootSaga() {
	yield fork(manageWebSocketConnection);
	yield fork(watchLocationChange);
}
