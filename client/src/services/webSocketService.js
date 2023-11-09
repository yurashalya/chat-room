import { eventChannel, END } from "redux-saga";
import WebSocket from "isomorphic-ws";

import { getChatRoomName } from "hooks";

export let webSocket;

export const receiveMessage = message => ({
	type: "RECEIVE_MESSAGE",
	payload: message,
});

export function connectToWebSocket() {
	return eventChannel(emit => {
		webSocket = new WebSocket("ws://localhost:8080");

		webSocket.onopen = () => {
			joinRoomOnOpen();
		};

		webSocket.onerror = error => {
			console.error("WebSocket error:", error);
			emit(new Error("WebSocket error"));
		};

		webSocket.onmessage = e => {
			const message = JSON.parse(e.data);
			emit(receiveMessage(message));
		};

		webSocket.onclose = () => {
			emit(END);
		};

		const unsubscribe = () => {
			webSocket.close();
		};

		return unsubscribe;
	});
}

export const sendMessageToWebSocket = messageData => {
	if (webSocket && webSocket.readyState === WebSocket.OPEN) {
		webSocket.send(JSON.stringify({ type: "message", ...messageData }));
	} else {
		console.error("WebSocket is not connected.");
	}
};

const joinRoomOnOpen = async () => {
	const pathname = window.location.pathname;

	const room = getChatRoomName(pathname);

	if (room && webSocket && webSocket.readyState === WebSocket.OPEN) {
		webSocket.send(JSON.stringify({ type: "joinRoom", room }));
	}
};
