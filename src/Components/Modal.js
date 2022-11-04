import React from "react";

export default function Modal({ open, setOpen, children }) {
	console.log(children);
	return <div className={`modal ${open ? "show" : ""}`}>{children}</div>;
}
