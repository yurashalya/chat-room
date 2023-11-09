import React from "react";

import styles from "./message.module.scss";

const Message = ({ chat }) => {
	const { message, name } = chat;
	return (
		<>
			<section className={styles.messageContainer}>
				<h4 className={styles.title}>{name}</h4>
				<p className={styles.message}>{message}</p>
			</section>
		</>
	);
};

export default Message;
