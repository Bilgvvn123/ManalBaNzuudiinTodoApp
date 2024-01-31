import React, { useState } from "react";

const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const [isLoggedIn, setLoggedIn] = useState({});

	const [inputValue, setInputValue] = useState("");

	const addTodo = () => {
		setTodos([
			...todos,
			{
				todo: inputValue,
				id: Math.random(),
				completed: false,
				isBold: false,
				isEditing: false,
			},
		]);
		setInputValue("");
	};

	const deleteTodo = (id) => {
		const newTodos = [];
		todos.forEach((el) => {
			if (el.id !== id) newTodos.push(el);
		});

		setTodos(newTodos);
	};

	const bold = (id) => {
		const newTodos = [];
		todos.forEach((el) => {
			if (el.id !== id) newTodos.push(el);
			else newTodos.push({ ...el, isBold: !el.isBold });
		});

		setTodos(newTodos);
	};

	const completed = (id) => {
		const newTodos = [];
		todos.forEach((el) => {
			if (el.id !== id) newTodos.push(el);
			else newTodos.push({ ...el, completed: !el.completed });
		});

		setTodos(newTodos);
	};

	const edit = (id) => {
		const todo = todos.find((el) => el.id === id);

		if (!todo.isEditing) {
			const newTodos = [];
			todos.forEach((el) => {
				if (el.id !== id) newTodos.push(el);
				else {
					setInputValue(el.todo);
					newTodos.push({ ...el, isEditing: true });
				}
			});

			setTodos(newTodos);
		} else {
			const newTodos = [];
			todos.forEach((el) => {
				if (el.id !== id) newTodos.push(el);
				else {
					newTodos.push({
						...el,
						isEditing: false,
						todo: inputValue,
					});
					setInputValue("");
				}
				setTodos(newTodos);
			});
		}
	};

	return (
		<div>
			<h1>Todo Lists</h1>
			<input
				type="text"
				value={inputValue}
				placeholder="Aid"
				onChange={(e) => setInputValue(e.target.value)}
			/>
			{/* addTodo */}
			<button onClick={addTodo}>add</button>

			<div className="todos">
				{todos.length !== 0
					? todos.map((el, i) => (
							<div key={i}>
								<>
									<span
										style={{
											fontWeight:
												el.isBold === true
													? "bold"
													: "",
										}}
										className={
											el.completed === true
												? "completed"
												: ""
										}
									>
										{el.todo}{" "}
									</span>
									<b>{el.id} </b>
								</>
								<button onClick={() => deleteTodo(el.id)}>
									delete
								</button>
								<button onClick={() => bold(el.id)}>
									bold
								</button>
								<button onClick={() => completed(el.id)}>
									completed
								</button>
								<button onClick={() => edit(el.id)}>
									{el.isEditing ? "add" : "edit"}
								</button>
							</div>
					  ))
					: "no todos"}
			</div>
		</div>
	);
};

export default TodoWrapper;
