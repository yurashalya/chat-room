import { ChatRoomsName, ChatRoomsPathName } from "globalConstants";

export const getChatRoomName = pathname => {
	if (pathname.includes(ChatRoomsPathName.BACKEND_SUPPORT_PATH_NAME)) {
		return ChatRoomsName.BACKEND_SUPPORT;
	} else if (
		pathname.includes(ChatRoomsPathName.FRONTEND_SUPPORT_PATH_NAME)
	) {
		return ChatRoomsName.FRONTEND_SUPPORT;
	} else if (pathname.includes(ChatRoomsPathName.QA_SUPPORT_PATH_NAME)) {
		return ChatRoomsName.QA_SUPPORT;
	}
};
