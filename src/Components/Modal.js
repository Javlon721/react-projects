import React from "react";

export default function Modal({ open, setOpen, children }) {
    console.log(setOpen)
	return <div className="modal">{children}</div>;
}
