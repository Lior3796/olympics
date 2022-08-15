import React from "react";
import "./Button.css";

function Button({ text, func }) {
	return (
		<input
			{...(func && (onClick = { func }))}
			value={text}
			className="genericButton"
			type="button"
		/>
	);
}

export default Button;
