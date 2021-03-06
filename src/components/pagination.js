import React, { useState } from "react";
import "../layouts/style.css";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
	const pageNumbers = [];
	const [clickedId, setClicked] = useState("");

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map((number, id) => (
					<li key={number} className="pageItem">
						<a
							onClick={() => {
								paginate(number);
								setClicked(id);
							}}
							href="/#"
							id={id}
							className={id === clickedId ? "pageItem a active" : ""}
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
