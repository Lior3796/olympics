import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "./Article.css";
import { SetArticlesContext } from "../../../Context";
import MiniArticles from "../MiniArticles/MiniArticles";
import { motion, AnimatePresence } from "framer-motion";

function Article() {
	const [images, setImages] = useState();
	const homeVariant = {
		hidden: {
			opacity: "-50vw",
		},
		visible: {
			x: "0vw",
			transition: {
				duration: 2,
				delay: 1.5,
			},
		},
	};

	useEffect(() => {
		fetch(
			"https://pixabay.com/api/?key=16310212-3389ee07898607be0ab5e6846&q=yellow+flowers&image_type=photo&pretty=true"
		)
			.then((res) => res.json())
			.then((res) => setImages(res));
	}, []);
	console.log(images);

	const articlesData = SetArticlesContext();
	const mapArticlesData = () => {
		return articlesData.map((obj, key) => {
			return (
				<AnimatePresence exitBeforeEnter>
					<article className="StyledArticle" key={key}>
						<div style={{ width: "100%" }}>
							<h5 className="OlympicsLogo">{obj.olympics}</h5>
							<img src={obj.img} alt="" height="100%" width="100%" />
						</div>
						<p>{obj.header}</p>
						<h3>{obj.catgory}</h3>
					</article>
				</AnimatePresence>
			);
		});
	};

	return (
		<>
			<motion.div
				variants={homeVariant}
				initial="hidden"
				animate="visible"
				className="ArticleContainer"
			>
				{mapArticlesData()}
			</motion.div>
			<MiniArticles width="100%" height="60%" />
		</>
	);
}

export default Article;
