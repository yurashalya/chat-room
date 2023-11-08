import {
	SET_BACKEND_SUPPORT_ROOM,
	SET_FRONTEND_SUPPORT_ROOM,
	SET_QA_SUPPORT_ROOM,
} from "../constants";

const initialState = {
	backendSupportRoom: [],
	frontendSupportRoom: [],
	qaSupportRoom: [],
};

const chatRooms = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_BACKEND_SUPPORT_ROOM:
			return {
				...state,
				backendSupportRoom: payload,
			};
		case SET_FRONTEND_SUPPORT_ROOM:
			return {
				...state,
				frontendSupportRoom: payload,
			};
		case SET_QA_SUPPORT_ROOM:
			return {
				...state,
				qaSupportRoom: payload,
			};
		default:
			return state;
	}
};

export default chatRooms;
