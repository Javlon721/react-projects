import React from "react";

export default function Modal({
	open,
	setOpen,
	isWinner,
	isLoser,
	setGuessedLetters,
	setWordTOGuess,
	getWord,
	children,
}) {
	return (
		<div className={`modal ${(isWinner || isLoser) && open ? "show" : ""}`}>
			{children}
			<p>To restart press Enter or button below:</p>
			<div onClick={() => setOpen(false)} className="modal__close-btn"></div>
			<div
				onClick={() => {
					setGuessedLetters([]);
					setWordTOGuess(getWord);
                    setOpen(false);
				}}
				className="modal__restart-btn"
			>Press me</div>
		</div>
	);
}
