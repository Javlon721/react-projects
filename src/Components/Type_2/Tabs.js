import React from "react";

export default function Tabs({ lenght }) {
	const tabsArr = Array(lenght).fill(1);

	return tabsArr.map((item, index) => {
		return (
			<li key={index} className="second-type__tab">
				{index + 1}
			</li>
		);
	});
}
