import React from "react";

const HEAD = (
	<div
		style={{
			width: "70px",
			height: "70px",
			borderRadius: "50%",
			border: "10px solid black",
			position: "absolute",
			top: "69px",
			right: "-28px",
		}}
	/>
);
const BODY = (
	<div
		style={{
			width: "10px",
			height: "150px",
			backgroundColor: "black",
			position: "absolute",
			top: "129px",
			right: 0,
		}}
	/>
);
const LEFT_HAND = (
	<div
		style={{
			width: "10px",
			height: "80px",
			backgroundColor: "black",
			position: "absolute",
			top: "115px",
			right: 0,
			rotate: "50deg",
			transformOrigin: "left bottom",
		}}
	/>
);
const RIGHT_HAND = (
	<div
		style={{
			width: "10px",
			height: "80px",
			backgroundColor: "black",
			position: "absolute",
			top: "115px",
			right: 0,
			rotate: "-50deg",
			transformOrigin: "right bottom",
		}}
	/>
);

const LEFT_LEG = (
	<div
		style={{
			width: "10px",
			height: "80px",
			backgroundColor: "black",
			position: "absolute",
			top: "192px",
			right: "-10px",
			rotate: "130deg",
			transformOrigin: "left bottom",
		}}
	/>
);
const RIGHT_LEG = (
	<div
		style={{
			width: "10px",
			height: "80px",
			backgroundColor: "black",
			position: "absolute",
			top: "201px",
			right: "-7px",
			rotate: "-130deg",
			transformOrigin: "left bottom",
		}}
	/>
);

const BODY_PARTS = [HEAD, BODY, LEFT_HAND, RIGHT_HAND, LEFT_LEG, RIGHT_LEG];

export default function HangManDrawing({ numberOfGuesses }) {
	return (
		<div style={{ position: "relative", width: "276px" }}>
			{BODY_PARTS.slice(0, numberOfGuesses)}
			<div
				style={{
					width: "15px",
					height: "70px",
					backgroundColor: "black",
					position: "absolute",
					top: 0,
					right: 0,
				}}
			/>
			<div
				style={{
					width: "170px",
					height: "15px",
					backgroundColor: "black",
					marginLeft: "92.5px",
				}}
			/>
			<div
				style={{
					width: "15px",
					height: "380px",
					backgroundColor: "black",
					marginLeft: "92.5px",
				}}
			/>
			<div
				style={{
					width: "200px",
					height: "15px",
					backgroundColor: "black",
				}}
			/>
		</div>
	);
}
