import React, { useState, useEffect } from "react";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import Tabs from "./Components/Type_2/Tabs";
import Quiz2 from "./Components/Type_2/Quiz2";
import quizes from "./quizes.json";

const obj = {
	0: {
		0: false,
		1: false,
		2: false,
		3: false,
		4: false,
	},
	1: {
		0: false,
		1: false,
		2: false,
		3: false,
		4: false,
	},
	2: {
		0: false,
		1: false,
		2: false,
		3: false,
		4: false,
	},
	3: {
		0: false,
		1: false,
		2: false,
		3: false,
		4: false,
	},
	4: {
		0: false,
		1: false,
		2: false,
		3: false,
		4: false,
	},
};

quizes = quizes
	.map((i) => [Math.random(), i])
	.sort()
	.map((i) => i[1]);

function App() {
	const [quiz, setQuiz] = useState(0);
	const [correct, setCorrect] = useState(0);
	//========================================================================================================================================================

	const [quiz2, setQuiz2] = useState(0);
	const [correct2, setCorrect2] = useState(0);
	const [active, setActive] = useState(obj);
	const [busy, setBusy] = useState({});
	console.log(busy);
	//========================================================================================================================================================

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
					>
						<div
							className="quiz__progress-bar"
							style={{ width: `${Math.round((quiz / quizLength) * 100)}%` }}
						></div>
					</Quiz>
				) : (
					<Results correct={correct} length={quizLength} />
				)}
			</div>
			<div className="second-type">
				<ul className="second-type__tabs">
					<Tabs
						lenght={quizLength}
						setQuiz2={setQuiz2}
						isActive={active[quiz2]}
						busy={busy}
					/>
				</ul>
				<div className="second-type__quizes">
					<Quiz2
						count={quiz2}
						quiz={quizes[quiz2]}
						setQuiz2={setQuiz2}
						setCorrect={setCorrect2}
						lengthOf={quizLength}
						active={active}
						setActive={setActive}
						setBusy={setBusy}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
