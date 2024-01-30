import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
	const [user, setUser] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				"http://jsonplaceholder.typicode.com/users/" + id
			);

			setUser(res.data);
		};

		fetchData();
	}, []);

	return (
		<div>
			{id}
			{user && <h1>{JSON.stringify(user)}</h1>}
		</div>
	);
};

export default User;
