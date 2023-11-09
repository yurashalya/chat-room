import React from "react";
import { useHistory } from "react-router-dom";

import { Button, ChatRoom } from "components";

import styles from "./chatRoom.module.scss";

const BackendChat = () => {
	const history = useHistory();

	const handleLeftRoom = () => {
		history.push("/");
	};

	return (
		<section className={styles.chatRoomContainer}>
			<Button
				title="Left"
				onClick={handleLeftRoom}
				className={styles.leftButton}
			/>
			<ChatRoom />
		</section>
	);
};

export default BackendChat;
