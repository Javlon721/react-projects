import React from "react";

export default function Success({ show, setShow }) {
	return (
		<div className={`invite__success success ${show ? "show" : ""}`}>
			<div className="success__icon">
				<img
					src="https://raw.githubusercontent.com/Archakov06/react-beginner-projects/8adf80464e1ee4b084592b47c432cf1f9a864981/public/assets/success.svg"
					alt="foto"
				/>
			</div>
			<h2 className="success__title">Successfully!</h2>
			<div className="success__text">The invitation letter was sent.</div>
			<button
				onClick={() => window.location.reload()}
				type="button"
				class="success__btn"
			>
				Back to users
			</button>
		</div>
	);
}
