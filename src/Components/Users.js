import React, { useState } from "react";
import { Skeleton } from "./Skeleton";
import User from "./User";

export default function Users({
	items,
	isLoading,
	searchValue,
	onClickInvite,
}) {
	return (
		<ul className="invite__list">
			{!isLoading ? (
				items
					.filter((user) => {
						const fullName = user.first_name + " " + user.last_name;
						return (
							fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
							user.email.toLowerCase().includes(searchValue.toLowerCase())
						);
					})
					.map((item) => (
						<User key={item.id} {...item} onClick={onClickInvite} />
					))
			) : (
				<Skeleton />
			)}
		</ul>
	);
}
