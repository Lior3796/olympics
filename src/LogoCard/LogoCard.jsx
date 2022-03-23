import React from "react";
import styled from "styled-components";
import Headlines from "../Features/Components/Headlines/Headlines";

function LogoCard() {
	const LogoCard = styled.div`
		flex-direction: column;
		width: 500px;
		position: absolute;
		left: 15%;
		overflow: hidden;
		color: white;
		@media (max-width: 500px) {
			left: 5%;
		}
	`;
	const StyledContent = styled.div`
		height: 100%;
	`;
	return (
		<LogoCard>
			<StyledContent>
				<h2 style={{ fontWeight: "bold", fontSize: "50px", width: "100%" }}>
					Olympic Games
				</h2>
			</StyledContent>
			<img
				src="https://img.olympicchannel.com/images/image/private/t_1-1_300/primary/apw4ubzgyihvp9nmml7j"
				width="300px"
				alt=""
			/>
			<Headlines
				img="https://olympics.com/images/static/b2p-picto/olympics/picto-skb.svg"
				header="Jodo"
			/>
			<Headlines
				img="https://olympics.com/images/static/b2p-picto/olympics/picto-skb.svg"
				header="Jodo"
			/>
			<Headlines
				img="https://olympics.com/images/static/b2p-picto/olympics/picto-ath.svg"
				header="Athletics"
			/>
		</LogoCard>
	);
}

export default LogoCard;
