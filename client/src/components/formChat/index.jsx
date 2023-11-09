import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button } from "components";

import { sendMessageToWebSocket } from "services";

import styles from "./formChat.module.scss";

const FormChat = () => {
	const room = useSelector(store => store?.chatRooms?.onChatRoomName);

	const [nickname, setNickname] = useState("");
	const [message, setMessage] = useState("");

	const onChangeNameHandler = name => {
		setNickname(name);
	};

	const onChangeMessageHandler = message => {
		setMessage(message);
	};

	const handleSendMessage = e => {
		e.preventDefault();

		const messageData = {
			name: nickname,
			message: message,
		};

		sendMessageToWebSocket({ room, ...messageData });

		setMessage("");
		setNickname("");
	};

	return (
		<form className={styles.sendInfoContainer} onSubmit={handleSendMessage}>
			<input
				type="text"
				name="name"
				id="name"
				value={nickname}
				placeholder="Nickname"
				className={styles.field}
				onChange={e => onChangeNameHandler(e.target.value)}
			/>
			<input
				type="text"
				name="message"
				id="message"
				value={message}
				placeholder="Message"
				className={styles.field}
				onChange={e => onChangeMessageHandler(e.target.value)}
			/>
			<Button
				title="Send"
				type="submit"
				className={styles.sendMessageButton}
			/>
		</form>
	);
};

export default FormChat;
