import React from "react";
import PropTypes from "prop-types";

function Buttons({ arr, text, onClick }) {
	let classes = arr.concat("button");
	return (
		<button onClick={onClick} type="button" className={classes.join(" ")}>
			{text}
		</button>
	);
}

Buttons.propTypes = {
	arr: PropTypes.array,
};
export default Buttons;
