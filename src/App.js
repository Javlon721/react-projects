import React, { useEffect, useState, useCallback } from "react";

import words from "./words.json";
import HangManDrawing from "./Components/HangManDrawing.js";
import HangmanKeyBoard from "./Components/HangmanKeyBoard.js";
import HangmanWord from "./Components/HangmanWord.js";
import Modal from "./Components/Modal";

function getWord() {
	return words[Math.floor(Math.random() * words.length)];
}

function App() {
	const [wordToGuess, setWordTOGuess] = useState(getWord);
	const [guessedLetters, setGuessedLetters] = useState([]);
	const [open, setOpen] = useState(false);

	const inCorrectLetters = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	);
	const isLoser = inCorrectLetters.length >= 6;
	const isWinner = wordToGuess
		.split("")
		.every((letter) => guessedLetters.includes(letter));

	const addGuessedLetter = useCallback(
		(letter) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return;

			setGuessedLetters((currentLetter) => [...currentLetter, letter]);
		},
		[guessedLetters, isLoser, isWinner]
	);

	useEffect(() => {
		const handler = (e) => {
			const key = e.key;

			if (!key.match(/^[a-z]$/)) return;

			e.preventDefault();
			addGuessedLetter(key);
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [guessedLetters]);

	useEffect(() => {
		const handler = (e) => {
			const key = e.key;

			if (key !== "Enter") return;

			e.preventDefault();
			setGuessedLetters([]);
			setWordTOGuess(getWord);
		};

		document.addEventListener("keypress", handler);
	}, []);

	useEffect(() => {
		isWinner || isLoser ? setOpen(true) : setOpen(false);
	}, [isWinner, isLoser]);

	return (
		<div className="wrapper">
			<h1 className="title">Hello to the HangMan Game</h1>
			<div className="hangman">
				<div className="hangman__title">
					<Modal
						open={open}
						setOpen={setOpen}
						isWinner={isWinner}
						isLoser={isLoser}
						setGuessedLetters={setGuessedLetters}
						setWordTOGuess={setWordTOGuess}
						getWord={getWord}
					>
						<h2 className="modal__title">
							{isWinner && "Winner! Refresh to try again"}
							{isLoser && "Nice try! Refresh to try again"}
						</h2>
					</Modal>
				</div>
				<div className="hangman__body">
					<div className="hangman__img">
						<HangManDrawing numberOfGuesses={inCorrectLetters.length} />
					</div>
					<div className="hangman__board">
						<HangmanWord
							guessedLetters={guessedLetters}
							wordToguess={wordToGuess}
							reveal={isLoser}
						/>
						<HangmanKeyBoard
							addGuessedLetter={addGuessedLetter}
							activeLetter={guessedLetters.filter((letter) =>
								wordToGuess.includes(letter)
							)}
							inActiveLetter={inCorrectLetters}
							disabled={isWinner || isLoser}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
