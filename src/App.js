import React, { useState, useEffect } from "react";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import quizes from "./quizes.json";

quizes = quizes
	.map((i) => [Math.random(), i])
	.sort()
	.map((i) => i[1]);

function App() {
	const [quiz, setQuiz] = useState(0);
	const [correct, setCorrect] = useState(0);

	//================================================================================================================================
	return (
		<div className="wrapper">
			<div className="fisrt-type">
				{quiz !== quizes.length ? (
					<Quiz
						count={quiz}
						quiz={quizes[quiz]}
						setQuiz={setQuiz}
						setCorrect={setCorrect}
						length={quizes.length}
					/>
				) : (
					<Results correct={correct} length={quizes.length} />
				)}
			</div>
		</div>
	);
}

export default App;
