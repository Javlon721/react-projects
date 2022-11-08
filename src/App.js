import React, { useState, useEffect } from "react";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import Tabs from "./Components/Type_2/Tabs";
import quizes from "./quizes.json";

quizes = quizes
	.map((i) => [Math.random(), i])
	.sort()
	.map((i) => i[1]);

function App() {
	const [quiz, setQuiz] = useState(0);
	const [correct, setCorrect] = useState(0);
	const quizLength = quizes.length;
	//================================================================================================================================
	return (
		<div className="wrapper">
			<div className="fisrt-type">
				{quiz !== quizLength ? (
					<Quiz
						count={quiz}
						quiz={quizes[quiz]}
						setQuiz={setQuiz}
						setCorrect={setCorrect}
						length={quizLength}
					/>
				) : (
					<Results correct={correct} length={quizLength} />
				)}
			</div>
			<div className="second-type">
				<ul className="second-type__tabs">
					<Tabs lenght={quizLength} />
				</ul>
			</div>
		</div>
	);
}

export default App;
