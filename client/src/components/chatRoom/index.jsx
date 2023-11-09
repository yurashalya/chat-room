import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { Message, Loader, Title } from "components";

import styles from "./chatRoom.module.scss";

const Chat = ({ historyChat, homeTitle }) => {
	const isLoading = useSelector(store => store?.loader?.isDataLoading);

	const lastTenMessages =
		historyChat?.length <= 10 ? historyChat : historyChat?.slice(-10);

	return (
		<>
			<Title title={homeTitle} />
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
								{lastTenMessages?.map((chat, index) => (
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
