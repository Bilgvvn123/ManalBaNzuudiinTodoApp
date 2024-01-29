import React from "react";

const Spinner = () => {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				position: "relative",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 100,
			}}
		>
			<div class="fingerprint-spinner" style={{ position: "absolute" }}>
				<div class="spinner-ring"></div>
				<div class="spinner-ring"></div>
				<div class="spinner-ring"></div>
				<div class="spinner-ring"></div>
				<div class="spinner-ring"></div>
				<div class="spinner-ring"></div>
				<div class="spinner-ring"></div>
				<div class="spinner-ring"></div>
				<div class="spinner-ring"></div>
			</div>
		</div>
	);
};

export default Spinner;
