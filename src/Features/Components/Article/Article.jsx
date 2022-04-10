import React, { useContext, useEffect, useState } from "react";
import "./Article.css";
import { SetArticlesContext } from "../../../Context";
import MiniArticles from "../MiniArticles/MiniArticles";
import { motion, AnimatePresence } from "framer-motion";
import Topics from "../../Components/Topics/Topics";

function Article() {
	const [images, setImages] = useState();
	const articlesData = SetArticlesContext();

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

	const mapArticlesData = () => {
		return articlesData.map((obj, key) => {
			return (
				<AnimatePresence exitBeforeEnter>
					<article className="StyledArticle" key={key}>
						<div>
							<h5 className="OlympicsLogo">{obj.olympics}</h5>
							<img src={obj.img} alt="" width="100%" />
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
			<MiniArticles />
			<Topics />
		</>
	);
}

export default Article;
