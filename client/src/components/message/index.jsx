import React from "react";

import styles from "./message.module.scss";

const Message = () => {
	return (
		<>
			<section className={styles.messageContainer}>
				<h4 className={styles.title}>Kira</h4>
				<p className={styles.message}>
					HellodfddffdfdfdfdfdfdfdfdHellodfddffdfdfdfdfdfdfdfdHellodfddffdfdfdfdfdfdfdfdHellodfdsafsfsdffdfdfdfdfdfdfdfd
				</p>
			</section>
			<section className={styles.messageContainer}>
				<h4 className={styles.title}>Kira</h4>
				<p className={styles.message}>Hellodfddf</p>
			</section>
			<section className={styles.messageContainer}>
				<h4 className={styles.title}>Kira</h4>
				<p className={styles.message}>Hello Test React</p>
			</section>
			<section className={styles.messageContainer}>
				<h4 className={styles.title}>Kira</h4>
				<p className={styles.message}>Hello Test React</p>
			</section>
			<section className={styles.messageContainer}>
				<h4 className={styles.title}>Kira</h4>
				<p className={styles.message}>Hello Test React</p>
			</section>
		</>
	);
};

export default Message;
