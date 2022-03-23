import React, { useState, createContext, useEffect } from "react";
import "./Container.css";
import AppRouter from "../../../AppRouter/AppRouter";

function Container() {
	return (
		<div className="container-components">
			<AppRouter />
		</div>
	);
}

export default Container;
