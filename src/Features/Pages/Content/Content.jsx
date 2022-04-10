import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Article from "../../Components/Article/Article";

function Content() {
	const Content = styled.div`
		position: relative;
		height: 200vh;
		width: 100%;
		@media (max-width: 500px) {
			height: 280vh;
		}
	`;

	return (
		<Content>
			<Header headline="Latets News" />
			<Article />
		</Content>
	);
}

export default Content;
