import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increaseCount } from "store/actions/actionCreator";

import styles from "./home.module.scss";

const Home = () => {
	const count = useSelector(store => store?.counter?.count || 0);
	const dispatch = useDispatch();

	const handleIncrease = () => {
		dispatch(increaseCount());
	};

	return (
		<div className={styles.homeContainer}>
			<button onClick={handleIncrease}>+1</button>
			<h1>{count}</h1>
		</div>
	);
};

export default Home;
