import React, { useState } from "react";

export default function User({
	id,
	email,
	first_name,
	last_name,
	avatar,
	onClick,
}) {
	const [isActive, setIsactive] = useState(false);
	const fullName = first_name + " " + last_name;
	return (
		<li className="invite__item item-invite">
			<div className="item-invite__img">
				<img src={avatar} alt="foto" />
			</div>
			<div className="item-invite__body">
				<div className="item-invite__fullName">{fullName}</div>
				<a href={email} className="item-invite__email">
					{email}
				</a>
			</div>
			<button
				onClick={() => {
					setIsactive(!isActive);
					onClick(id);
				}}
				type="button"
				className={`item-invite__icon ${isActive ? "active" : ""}`}
			></button>
		</li>
	);
}
