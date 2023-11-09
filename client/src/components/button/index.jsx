import React from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

const Button = ({ title, onClick, className }) => {
	return (
		<button
			className={`${styles.btn} ${clsx(className)}`}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default Button;
