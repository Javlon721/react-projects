import React from "react";

const KEYS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
export default function HangmanKeyBoard({
	addGuessedLetter,
	activeLetter,
	inActiveLetter,
	disabled = false,
}) {
	return (
		<div
			style={{
				marginTop: "50px",
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
				gap: "5px",
			}}
		>
			{KEYS.map((letter) => {
				const active = activeLetter.includes(letter);
				const inActive = inActiveLetter.includes(letter);
				return (
					<button
						disabled={inActive || active || disabled}
						onClick={() => addGuessedLetter(letter)}
						className={`btn ${active ? "active" : ""} ${
							inActive ? "inActive" : ""
						}`}
						key={letter}
						style={{}}
					>
						{letter}
					</button>
				);
			})}
		</div>
	);
}
