import React from "react";
import clsx from "clsx";

const Title = ({ title, className }) => {
	return <h1 className={clsx(className)}>{title}</h1>;
};

export default Title;
