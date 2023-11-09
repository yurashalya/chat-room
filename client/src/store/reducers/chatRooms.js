import {
	SET_BACKEND_SUPPORT_ROOM,
	SET_FRONTEND_SUPPORT_ROOM,
	SET_QA_SUPPORT_ROOM,
	SET_REMOVE_BACKEND_SUPPORT_ROOM,
	SET_REMOVE_FRONTEND_SUPPORT_ROOM,
	SET_REMOVE_QA_SUPPORT_ROOM,
} from "../constants";

const initialState = {
	backendSupportRoom: [],
	frontendSupportRoom: [],
	qaSupportRoom: [],
	onChatRoomName: "",
};

const chatRooms = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_BACKEND_SUPPORT_ROOM:
			return {
				...state,
				backendSupportRoom: [
					...state.backendSupportRoom,
					...(payload?.messages || []),
				],
				onChatRoomName: payload?.room,
			};
		case SET_FRONTEND_SUPPORT_ROOM:
			return {
				...state,
				frontendSupportRoom: [
					...state.frontendSupportRoom,
					...(payload?.messages || []),
				],
				onChatRoomName: payload?.room,
			};
		case SET_QA_SUPPORT_ROOM:
			return {
				...state,
				qaSupportRoom: [
					...state.qaSupportRoom,
					...(payload?.messages || []),
				],
				onChatRoomName: payload?.room,
			};
		case SET_REMOVE_BACKEND_SUPPORT_ROOM:
			return {
				...state,
				backendSupportRoom: [],
				onChatRoomName: "",
			};
		case SET_REMOVE_FRONTEND_SUPPORT_ROOM:
			return {
				...state,
				frontendSupportRoom: [],
				onChatRoomName: "",
			};
		case SET_REMOVE_QA_SUPPORT_ROOM:
			return {
				...state,
				qaSupportRoom: [],
				onChatRoomName: "",
			};
		default:
			return state;
	}
};

export default chatRooms;
