import React, { useState} from "react";
import Buttons from "./Components/Buttons";

function App() {
	let [count, setCount] = useState(0);
	function increment() {
		setCount((prev) => prev + 1);
	}
	function decrement() {
		setCount((prev) => prev - 1);
	}
	return (
		<div className="incdec">
			<h4 className="incdec__title title">
				Press buttons to increment or decrement
			</h4>
			<div className="incdec__result">Result: {count}</div>
			<div className="incdec__buttons">
				<Buttons arr={["incdec__inc"]} text={"Increment"} onClick={increment} />
				<Buttons arr={["incdec__dec"]} text={"Decrement"} onClick={decrement} />
			</div>
		</div>
	);
}

export default App;
