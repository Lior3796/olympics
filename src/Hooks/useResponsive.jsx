import { useState, useEffect } from "react";

export function useResponsive() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () =>
			window.removeEventListener("resize", () => console.log("Clean up"));
	}, [width]);

	return width;
}
