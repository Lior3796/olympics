import React from "react";
import styled from "styled-components";
import DailyLinks from "../DailyLinks/DailyLinks";
function ContainerLinks() {
	const ContainerLinks = styled.div`
		position: absolute;
		bottom: -20px;
		display: flex;
		width: 100%;
		justify-content: space-around;
		@media (max-width: 500px) {
			display: none;
		}
	`;

	return (
		<ContainerLinks>
			<DailyLinks link="Medals" />
			<DailyLinks link="Competition" />
			<DailyLinks link="Athletes" />
		</ContainerLinks>
	);
}

export default ContainerLinks;
