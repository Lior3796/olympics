import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./registration.css";
import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { useResponsive } from "../../../Hooks/useResponsive";
function Registration() {
	const [status, setStatus] = useState("");
	const [link, setLink] = useState("/olympicData");
	const [readMore, setReadMore] = useState(false);
	const width = useResponsive();

	const RegistrationVar = {
		hidden: {
			x: 0,
		},
		visible: {
			x: "-100vw",
			transition: {
				duration: 3,
			},
			exit: {
				x: "100vw",
			},
		},
	};
	function changeRoute() {
		setStatus("visible");
		setLink("/FormRegister");
	}

	return (
		<motion.div
			variants={RegistrationVar}
			animate={status}
			initial="hidden"
			exit="exit"
			className="form-container"
		>
			<div className="form-img">
				<img
					src="https://img.olympicchannel.com/images/image/private/t_hp_signup/f_auto/v1538355600/primary/lys8hqttmonkqqpo8dmb"
					alt=""
				/>
			</div>
			<div className="signing">
				<div className="form-text">
					<span>Don't forget to sign up</span>
					<p>
						Stay up to date on your favourite sports and athletes..
						{readMore && (
							<span className="more">
								Watch original Olympic films and documentaries. Get exclusive
								stories about your favourite Olympic athletes and sports into
								your e-mail inbox
							</span>
						)}
					</p>
					<button onClick={() => setReadMore(!readMore)}>Read more</button>
					<div>
						<Link to="/FormRegister">
							<input
								onClick={() => changeRoute()}
								type="button"
								className="sign-up"
								id="sign-in"
								value="sign-in now"
							/>
							<input
								type="button"
								className="sign-up"
								id="log-in"
								value="log-in"
							/>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Registration;
