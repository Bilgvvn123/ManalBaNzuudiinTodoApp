import { useEffect, useState } from "react";
import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import axios from "axios";
import Card from "./components/Card";
import Spinner from "./components/Spinner";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Products";
import User from "./pages/Product";
import Login from "./pages/Login";

function App() {
	const [login, setLogin] = useState({ name: "Ganaa" });
	const [loading, setLoading] = useState(true);

	// useEffect(function () {
	// 	async function dataTatagFunc() {
	// 		const res = await axios.get(
	// 			"https://jsonplaceholder.typicode.com/users"
	// 		);

	// 		setA(res.data);
	// 		setLoading(false);
	// 	}

	// 	dataTatagFunc();
	// }, []);
	console.log(login);
	return (
		<>
			{/* <div
				className="Todos"
				onClick={() => {
					setA(!a);
				}}
			></div>
			{loading && <Spinner />}
			{a.length !== 0 && a.map((el) => <Card user={el} />)} */}
			<Link to="/">Go home</Link>
			<br />
			<Link to="/home">Go home</Link>
			<br />
			<Link to="/about">Go home</Link>
			<br />
			{login.name && <Link to="/about">Dashboard</Link>}
			<br />
			<br />
			aaaaaaaaaaaaaaaaa
			<Routes>
				<Route path="/" element={<h1>HELLO</h1>} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login setLogin={setLogin} />} />
				<Route path="/users" element={<Users />} />
				<Route path="/users/:id" element={<User />} />
			</Routes>
		</>
	);
}

export default App;
