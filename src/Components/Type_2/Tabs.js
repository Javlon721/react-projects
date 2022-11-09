import React, { useState } from "react";

export default function Tabs({ lenght, setQuiz2, isActive, busy }) {
	const tabsArr = Array(lenght).fill(1);

	return tabsArr.map((item, index) => {
		return (
			<li
				onClick={setQuiz2.bind(null, index)}
				key={index}
				className={`second-type__tab ${busy?.[index] ? "active" : ""}`}
			>
				{index + 1}
			</li>
		);
	});
}
