import React, { useState } from "react";

function App() {
	//================================================================================================================================
	return (
		<div className="wrapper">
			<h1 className="title">Hello to the HangMan Game</h1>
			<div className="hangman">
				<div className="hangman__status">Win Lose</div>
				<HangManDrawing />
				<HangmanWord />
				<HangmanKeyBoard />
			</div>
		</div>
	);
}

export default App;
