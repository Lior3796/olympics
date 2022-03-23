import { useEffect, useState, useContext } from "react";
import { GetOlympicsEvents } from "../../../Context";
import styled from "styled-components";
import Log from "../Log/Log";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ position }) {
	const StyledNav = styled.nav`
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: ${position ? "space-between" : "center"};
		background: ${position ? "#e5e5e5" : "white"};
	`;

	const switchKeys = (key) => {
		switch (key) {
			case 0 || 2:
				return "/";

			default:
				return "/OlympicData";
		}
	};

	const tourtements = GetOlympicsEvents();
	return (
		<StyledNav>
			<ul className="nav-ul">
				{tourtements.map((item, key) => {
					return (
						<Link to={switchKeys(key)}>
							<motion.li
								style={{ color: "black", textDecorationLine: "none" }}
								whileHover={{ scale: 1.4 }}
								key={key}
							>
								{position ? item.country : item.catgory}
							</motion.li>
						</Link>
					);
				})}
			</ul>
			{position && <Log />}
		</StyledNav>
	);
}

export default NavBar;
