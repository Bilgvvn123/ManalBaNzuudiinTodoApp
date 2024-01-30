import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				"http://jsonplaceholder.typicode.com/users"
			);

			setUsers(res.data);
		};

		fetchData();
	}, []);

	return (
		<div>
			{users.length !== 0 &&
				users.map((u) => (
					<Link to={`/users/${u.id}`}>
						<div style={{ display: "flex" }}>
							<h1>{u.name}</h1>
							<h2>{u.email}</h2>
						</div>
					</Link>
				))}
		</div>
	);
};

export default Users;
