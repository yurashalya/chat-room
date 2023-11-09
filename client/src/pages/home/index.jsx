import React from "react";
import { NavLink } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
// import { increaseCount } from "store/actions/actionCreator";

import { navigation } from "./constants";

import styles from "./home.module.scss";

const Home = () => {
	// const count = useSelector(store => store?.counter?.count || 0);
	// const dispatch = useDispatch();

	// const handleIncrease = () => {
	// 	dispatch(increaseCount());
	// };

	return (
		<>
			<h1 className={styles.mainTitle}>Chat Rooms</h1>
			<div className={styles.homeContainer}>
				<nav className="nav">
					<section className={styles.roomsContainer}>
						{navigation.map(({ id, title, path }) => (
							<NavLink
								key={id}
								to={path}
								exact={true}
								className={styles.navLink}
							>
								{title}
							</NavLink>
						))}
					</section>
				</nav>
			</div>
		</>
	);
};

export default Home;
