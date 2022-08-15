import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export function HamburgerMenu() {
	return (
		<styledNav>
			<PopupState variant="popover" popupId="demo-popup-menu">
				{(popupState) => (
					<>
						<Button variant="contained" {...bindTrigger(popupState)}>
							<i class="fas fa-bars"></i>
						</Button>
						<Menu {...bindMenu(popupState)}>
							<Link to="/OlympicData">
								<MenuItem onClick={popupState.close}>Olympic</MenuItem>
							</Link>
						</Menu>
					</>
				)}
			</PopupState>
		</styledNav>
	);
}
