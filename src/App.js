import React, { useRef, useState, useEffect } from "react";
import { Skeleton } from "./Components/Skeleton";
import Success from "./Components/Success";
import Users from "./Components/Users";

//

function App() {
	const item = useRef(null);
	const [show, setShow] = useState(false);
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState("");
	const [invites, setInvites] = useState([]);
	useEffect(() => {
		fetch("https://reqres.in/api/users")
			.then((respond) => respond.json())
			.then((data) => setUsers(data.data))
			.catch((err) => {
				console.warn(err);
			})
			.finally(() => setIsLoading(false));
	}, []);

	const onChangeSearchValue = (e) => {
		setSearchValue(e.target.value);
	};
	const onClickInvite = (id) => {
		if (invites.includes(id)) {
			setInvites((prev) => prev.filter((item) => item !== id));
		} else {
			setInvites((prev) => [...prev, id]);
		}
	};
	console.log(invites);
	//================================================================================================================================
	return (
		<div className="wrapper">
			<div className="invite">
				{!show ? (
					<div className={`invite__people `}>
						<div ref={item} className="invite__search">
							<div className="invite__icon">
								<svg
									width="17"
									height="17"
									viewBox="0 0 17 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M1.7 7.64999C1.7 4.3639 4.36391 1.7 7.65001 1.7C10.9361 1.7 13.6 4.3639 13.6 7.64999C13.6 9.25281 12.9662 10.7076 11.9356 11.7774C11.9063 11.7999 11.8781 11.8246 11.8513 11.8515C11.8245 11.8783 11.7998 11.9065 11.7773 11.9358C10.7075 12.9663 9.25274 13.6 7.65001 13.6C4.36391 13.6 1.7 10.9361 1.7 7.64999ZM12.4249 13.6272C11.1162 14.674 9.45622 15.3 7.65001 15.3C3.42502 15.3 0 11.875 0 7.64999C0 3.42502 3.42502 0 7.65001 0C11.875 0 15.3 3.42502 15.3 7.64999C15.3 9.4563 14.674 11.1164 13.627 12.4251L16.7509 15.549C17.0828 15.8809 17.0828 16.4191 16.7509 16.751C16.4189 17.083 15.8807 17.083 15.5488 16.751L12.4249 13.6272Z"
										fill="#A7A7A7"
									/>
								</svg>
							</div>
							<input
								value={searchValue}
								onChange={onChangeSearchValue}
								onFocus={() => {
									item.current.classList.add("active");
								}}
								onBlur={() => {
									item.current.classList.remove("active");
								}}
								type="text"
								placeholder="Search"
								className="invite__inp"
							></input>
						</div>
						<div className="invite__body">
							<Users
								items={users}
								isLoading={isLoading}
								searchValue={searchValue}
								onClickInvite={onClickInvite}
							/>
						</div>
						<button
							disabled={invites.length === 0}
							onClick={() => {
								setShow(true);
							}}
							type="button"
							className={`invite__btn ${invites.length === 0 ? "" : "active"}`}
						>
							Invite
						</button>
					</div>
				) : (
					<Success />
				)}
			</div>
		</div>
	);
}

export default App;
