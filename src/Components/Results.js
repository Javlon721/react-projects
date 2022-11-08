import React from "react";

export default function Results({ correct, length }) {
	return (
		<div className="results">
			<h2 className="results__title">Your score {`${correct}/${length}`}</h2>
			<a href="/" className="results__reload">Reload</a>
		</div>
	);
}
