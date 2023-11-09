import {
	SET_BACKEND_SUPPORT_ROOM,
	SET_FRONTEND_SUPPORT_ROOM,
	SET_QA_SUPPORT_ROOM,
	SET_REMOVE_BACKEND_SUPPORT_ROOM,
	SET_REMOVE_FRONTEND_SUPPORT_ROOM,
	SET_REMOVE_QA_SUPPORT_ROOM,
} from "../constants";

export const setBackendChatRoom = payload => {
	return {
		type: SET_BACKEND_SUPPORT_ROOM,
		payload,
	};
};

export const setFrontendChatRoom = payload => {
	return {
		type: SET_FRONTEND_SUPPORT_ROOM,
		payload,
	};
};

export const setQaChatRoom = payload => {
	return {
		type: SET_QA_SUPPORT_ROOM,
		payload,
	};
};

export const setRemoveBackendChatRoom = () => {
	return {
		type: SET_REMOVE_BACKEND_SUPPORT_ROOM,
	};
};

export const setRemoveFrontendChatRoom = () => {
	return {
		type: SET_REMOVE_FRONTEND_SUPPORT_ROOM,
	};
};

export const setRemoveQaChatRoom = () => {
	return {
		type: SET_REMOVE_QA_SUPPORT_ROOM,
	};
};
