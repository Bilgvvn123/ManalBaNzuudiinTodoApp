import React, { useState } from "react";
import TodoCard from "./TodoCard";

const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);

	const [value, setValue] = useState("");

	function add() {
		setTodos([...todos, { todo: value, id: Math.random() }]);
	}

	function allClear() {
		setTodos([]);
	}

	return (
		<div>
			<h1>Todo Lists</h1>
			<input
				type="text"
				className="input"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={add}>add</button>
			<button onClick={allClear}>ac</button>
			<ol>
				{todos.length !== 0
					? todos.map((t, i) => (
							<TodoCard
								key={i}
								setTodos={setTodos}
								todos={todos}
								todoObj={t}
							/>
					  ))
					: "No Todos"}
			</ol>
		</div>
	);
};

export default TodoWrapper;
