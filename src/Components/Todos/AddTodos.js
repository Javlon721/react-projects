import React, { useState } from "react";

function useInputValee(defaults = "") {
	let [value, setValue] = useState(defaults);

	return {
		bind: {
			value,
			onChange: (e) => {
				setValue(e.target.value);
			},
		},
		clear: () => setValue(""),
		value: () => value,
	};
}

function AddTodos({ onCreate }) {
	// let [value, setValue] = useState("");
	let input = useInputValee("");

	function submitHandler(e) {
		e.preventDefault();
		/* if (value.trim()) {
			onCreate(value);
			setValue("");
		} */
		if (input.value().trim()) {
			onCreate(input.value());
			input.clear();
		}
	}
	return (
		<form className="addtodo" onSubmit={submitHandler}>
			<input type="text" className="addtodo__text" {...input.bind} />
			<button type="submit" className="addtodo__btn">
				Add
			</button>
		</form>
	);
}

export default AddTodos;
