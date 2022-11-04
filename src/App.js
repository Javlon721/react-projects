import React, { useState } from "react";
import Modal from "./Components/Modal";

function App() {
	const [open, setOpen] = useState(false);

	//================================================================================================================================
	return (
		<div className="wrapper">
			<button className="btn" onClick={() => setOpen(true)}>
				Click to open Modal
			</button>
			<Modal open={open} setOpen={setOpen}>
				<h2>Hi! It's modal view. How are you doing today</h2>
				<div onClick={() => setOpen(false)} className="modal__button"></div>
			</Modal>
		</div>
	);
}

export default App;
