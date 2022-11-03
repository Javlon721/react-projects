import React from "react";

export default function HangmanWord({
	guessedLetters = "",
	wordToguess,
	reveal = false,
}) {
	return (
		<div
			style={{
				display: "flex",
				columnGap: "15px",
				alignItems: "center",
				fontWeight: "bold",
				textTransform: "uppercase",
				fontSize: "60px",
				marginTop: "15px",
			}}
		>
			{wordToguess.split("").map((letter, index) => (
				<span key={index} style={{ borderBottom: "5px solid black" }}>
					<span
						style={{
							visibility:
								guessedLetters.includes(letter) || reveal
									? ""
									: "hidden",
							color:
								!guessedLetters.includes(letter) && reveal ? "#e63946" : "",
						}}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
}
