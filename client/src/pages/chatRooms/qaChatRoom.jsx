import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Button, ChatRoom, FormChat } from "components";

import { setRemoveQaChatRoom } from "store/actions/actionCreator";

import styles from "./chatRoom.module.scss";
const QaChat = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const historyChat = useSelector(store => store?.chatRooms?.qaSupportRoom);

	const handleLeftRoom = () => {
		dispatch(setRemoveQaChatRoom());
		history.push("/");
	};

	return (
		<section className={styles.chatRoomContainer}>
			<Button
				title="Left"
				onClick={handleLeftRoom}
				className={styles.leftButton}
			/>
			<ChatRoom historyChat={historyChat} />
			<FormChat />
		</section>
	);
};

export default QaChat;
