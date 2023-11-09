import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { Message, Loader } from "components";

import styles from "./chatRoom.module.scss";

const Chat = ({ historyChat }) => {
	const isLoading = useSelector(store => store?.loader?.isDataLoading);
	return (
		<>
			<section
				className={clsx(
					styles.chatContainer,
					historyChat.length === 0 &&
						styles.chatContainerWithoutMessage,
					isLoading && styles.chatContainerWithoutMessage,
				)}
			>
				{isLoading ? (
					<Loader />
				) : (
					<>
						{historyChat.length > 0 ? (
							<>
								{historyChat?.map((chat, index) => (
									<React.Fragment key={index}>
										<Message chat={chat} />
									</React.Fragment>
								))}
							</>
						) : (
							<h3>No messages</h3>
						)}
					</>
				)}
			</section>
		</>
	);
};

export default Chat;
