import React from "react";

import { Message } from "components";

import styles from "./chatRoom.module.scss";

const Chat = () => {
	return (
		<>
			<section className={styles.chatContainer}>
				<Message />
			</section>
		</>
	);
};

export default Chat;
