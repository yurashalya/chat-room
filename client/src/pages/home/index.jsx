import React from "react";
import { NavLink } from "react-router-dom";

import { navigation } from "./constants";
import { Title } from "components";

import styles from "./home.module.scss";

const Home = () => {
	return (
		<>
			<Title title="Chat Rooms" className={styles.mainTitle} />
			<div className={styles.homeContainer}>
				<nav className="nav">
					<section className={styles.roomsContainer}>
						{navigation.map(({ id, title, path, chatRoomName }) => (
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
