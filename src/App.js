import React, { useState, useEffect } from "react";
import AddTodos from "./Components/Todos/AddTodos";
import TodoList from "./Components/Todos/todoList";

import Context from "./context";
import Loader from "./Loader";

function App() {
	let [loading, setLoading] = React.useState(true);

	let [todos, setTodos] = React.useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then((response) => response.json())
			.then((todos) => {
				setTimeout(() => {
					setTodos(todos);
					setLoading(false);
				}, 2000);
			});
	}, []);

	function toggleTodo(id) {
		setTodos(
			(todos = todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}))
		);
	}
	function removeTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}
	function addTodo(title) {
		setTodos(
			todos.concat([
				{
					title,
					completed: false,
					id: Date.now,
				},
			])
		);
	}
	//================================================================================================================================
	return (
		<Context.Provider value={{ removeTodo }}>
			<div className="wrapper">
				<h1 className="main-title ">Hi React</h1>
				<div className="todos">
					<h2 className="todos__title title">Add your todo</h2>

					<AddTodos onCreate={addTodo} />
					<h2 className="todos__title title">Your todos</h2>
					{loading && <Loader />}
					{todos.length ? (
						<TodoList todos={todos} onToggle={toggleTodo} />
					) : loading ? null : (
						<p>You have not todos</p>
					)}
				</div>
			</div>
		</Context.Provider>
	);
}

export default App;
