import React, { useEffect, useState } from "react";

const Login = ({ setLogin }) => {
	const [isLoggedIn, setIsLoggedIn] = useState({
		name: "Turushii",
		email: "Erdeneshii@gmail.com",
	});
	useEffect(() => {
		setLogin({ name: "Ganaa" });
	}, []);

	return <div>Login</div>;
};

export default Login;
