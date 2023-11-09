import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Field } from "components";

import { sendMessageToWebSocket } from "services";

import styles from "./formChat.module.scss";

const FormChat = () => {
	const room = useSelector(store => store?.chatRooms?.onChatRoomName);

	const [nickname, setNickname] = useState("");
	const [message, setMessage] = useState("");
	const [errorName, setErrorName] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const onChangeNameHandler = name => {
		if (errorMessage) setErrorName("");
		if (name) setErrorName("");
		setNickname(name);
	};

	const onChangeMessageHandler = message => {
		if (errorName) setErrorMessage("");
		if (message) setErrorMessage("");
		setMessage(message);
	};

	const handleSendMessage = e => {
		e.preventDefault();

		if (nickname.trim() === "") {
			setErrorName("Nickname field is required");
			return;
		}

		if (message.trim() === "") {
			setErrorMessage("Message field is required");
			return;
		}

		if (message.length > 255) {
			setErrorMessage("Message cannot exceed 255 characters.");
			return;
		}

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
			<Field
				type="text"
				name="name"
				id="name"
				error={errorName}
				value={nickname}
				placeholder="Nickname"
				onChange={onChangeNameHandler}
			/>
			<Field
				type="text"
				name="message"
				id="message"
				error={errorMessage}
				value={message}
				placeholder="Message"
				onChange={onChangeMessageHandler}
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
