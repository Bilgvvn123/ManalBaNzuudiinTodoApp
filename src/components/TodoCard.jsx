import React, { useState } from "react";

const TodoCard = ({ todoObj, setTodos, todos }) => {
	const [color, setColor] = useState("");
	const [index, setIndex] = useState(0);

	const { id, todo } = todoObj;

	function deleteTodo() {
		const newTodos = [];
		for (let i = 0; i < todos.length; i++) {
			if (id !== todos[i].id) newTodos.push(todos[i]);
		}

		setTodos(newTodos);
	}

	function changeColor() {
		const colors = ["red", "blue", "green"];
		setColor(colors[index]);
		setIndex(index + 1);
	}

	return (
		<li>
			{/* todo */}
			<span style={{ color: color }}>{todo}</span> {/* actions */}
			<button onClick={deleteTodo}>del</button>
			<button>edit</button>
			<button>completed</button>
			<button onClick={changeColor}>change color</button>
		</li>
	);
};

export default TodoCard;
