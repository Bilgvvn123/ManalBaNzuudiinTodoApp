import React, { useContext } from "react";
import { UserContext } from "../contexts/loggedIn";

const Home = () => {
	const user = useContext(UserContext);
	console.log(user);

	return <div>{user.name ? "Dashboard" : "Login"}</div>;
};

export default Home;
