import React from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

const Button = ({ title, onClick, className, type = "button" }) => {
	return (
		<button
			className={`${styles.btn} ${clsx(className)}`}
			onClick={onClick}
			type={type}
		>
			{title}
		</button>
	);
};

export default Button;
