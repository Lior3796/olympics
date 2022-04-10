import React from "react";
import "./Topics.css";
import { SetMiniArticlesContext } from "../../../Context";

function Topics() {
	const Topics = SetMiniArticlesContext();
	const topicsMap = () => {
		return Topics.map((topic, key) => {
			return (
				<div key={key} className="Topics">
					<div className="img-topic-container">
						<img src={topic.img} alt="" width="80%" height="80%" />
					</div>
					<span>{topic.header}</span>
				</div>
			);
		});
	};
	return <div className="topics-container">{topicsMap()}</div>;
}

export default Topics;
