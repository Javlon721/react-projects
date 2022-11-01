import React, { useContext } from "react";
import Context from "../../context";

export default function TodoItem({ todo, index, onChange }) {
	let classes = ["todoList__inner"];
	const { removeTodo } = useContext(Context);
	if (todo.completed) {
		classes.push("done");
	}
	return (
		<li className="todoList">
			<span className={classes.join(" ")}>
				<input
					type="checkbox"
					checked={todo.completed}
					className="todoList__inp"
					onChange={() => onChange(todo.id)}
				/>
				<strong>{index + 1}</strong>
				{todo.title}
			</span>
			<button
				className="todoList__btn"
				onClick={removeTodo.bind(null, todo.id)}
			>
				&times;
			</button>
		</li>
	);
}
