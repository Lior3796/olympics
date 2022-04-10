import { useState, useEffect } from "react";
import HomeCover from "../../Components/HomeCover/HomeCover";
import NavBar from "../../Components/NavBar/NavBar";
import { useResponsive } from "../../../Hooks/useResponsive";
import { HamburgerMenu } from "../../Components/HamburgerMenu/HamburgerMenu";
import ContainerLinks from "../../Components/ContainerLinks/ContainerLinks";

import styled from "styled-components";

function Home() {
	const width = useResponsive();
	const [img, setImage] = useState();

	useEffect(() => {
		setImage("https://source.unsplash.com/1600x900/?olympics?sport");
	}, []);
	const StyledDiv = styled.div`
		width: 100%;
		height: 100vh;
		background-image: linear-gradient(45deg, black, transparent), url(${img});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		position: relative;
	`;
	return (
		<StyledDiv>
			{width > 600 ? <NavBar position /> : <HamburgerMenu />}

			<HomeCover />
			<ContainerLinks />
		</StyledDiv>
	);
}

export default Home;
