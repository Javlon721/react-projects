import React from "react";

export default function Quiz({ count, quiz, setQuiz, setCorrect, length }) {
	return (
		<div className="quiz">
			<div
				className="quiz__progress-bar"
				style={{ width: `${Math.round((count / length) * 100)}%` }}
			></div>
			<div className="quiz__title">{`${count + 1}) ${quiz.title}`}</div>
			<ul className="quiz__list">
				{quiz.variants.map((item, index) => (
					<li
						key={item}
						onClick={() => {
							setQuiz((prev) => prev + 1);

							if (item === quiz.answer) {
								setCorrect((prev) => prev + 1);
							}
						}}
						className="quiz__item"
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
