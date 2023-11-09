import React from "react";

import styles from "./field.module.scss";

const Field = ({ type, name, id, value, placeholder, error, onChange }) => {
	return (
		<section className={styles.fieldContainer}>
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				placeholder={placeholder}
				className={styles.field}
				onChange={e => onChange(e.target.value)}
			/>
			{error && <p className={styles.errorTitle}>{error}</p>}
		</section>
	);
};

export default Field;
