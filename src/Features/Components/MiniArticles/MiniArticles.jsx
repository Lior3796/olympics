import React, { useContext } from "react";
import styled from "styled-components";
import { SetMiniArticlesContext } from "../../../Context";
import Topics from "../Topics/Topics";

function MiniArticles({ width, height }) {
	const MiniArticlesData = SetMiniArticlesContext();
	const MiniArticle = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 1rem;
		width: 30%;
		@media (max-width: 500px) {
			width: 100%;
		}
	`;

	const MiniArticlesContainer = styled.div`
		display: flex;
		justify-content: center;
		img {
			width: 80%;
			height: 80%;
		}
		@media (max-width: 500px) {
			flex-direction: column;
			padding: 5px;
			img {
				width: 90%;
			}
		}
	`;

	const MiniArticleFunc = MiniArticlesData.map((article, key) => {
		return (
			<MiniArticle key={key}>
				<img src={article.img} alt="Image" />
				<h5>{article.header}</h5>
			</MiniArticle>
		);
	});

	return <MiniArticlesContainer>{MiniArticleFunc}</MiniArticlesContainer>;
}

export default MiniArticles;
