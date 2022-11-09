import React from "react";

export default function Quiz({
	count,
	quiz,
	setQuiz2,
	setCorrect,
	lengthOf,
	active,
	setActive,
	setBusy,
}) {
	return (
		<div className="quiz">
			<div className="quiz__title">{`${count + 1}) ${quiz.title}`}</div>
			<ul className="quiz__list">
				{quiz.variants.map((item, index) => (
					<li
						key={item}
						onClick={() => {
							// count + 1 < lengthOf
							// 	? setQuiz2((prev) => prev + 1)
							// 	: setQuiz2((prev) => prev);

							if (item === quiz.answer) {
								setCorrect((prev) => prev + 1);
							}
							setBusy((prev) => {
								return {
									...prev,
									[count]: true,
								};
							});
							setActive((prev) => {
								for (let key in prev[count]) {
									prev[count][key] = false;
								}
								return {
									...prev,
									[count]: {
										...prev[count],
										[index]: !prev[count][index],
									},
								};
							});
						}}
						className={`quiz__item ${active[count][index] ? "active" : ""}`}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
// ${active[count] ? "active" : ""}
/* 

*/
