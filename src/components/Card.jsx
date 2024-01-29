import React from "react";

const Card = ({ user }) => {
	const { name, email } = user;

	return (
		<div style={{ display: "flex" }}>
			<h1>{name}</h1>
			<p>{email}</p>
		</div>
	);
};

export default Card;
