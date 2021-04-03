import React, { Component } from "react";

import "../layouts/Home styles/style.css";
import { data } from "./cars";

export default class Home extends React.Component {
	render() {
		return (
			<main>
				<h1>All Cars</h1>

				{data.map(function (item) {
					return (
						<div>
							<h2>{item.carname}</h2>

							<span>Model: {item.model}</span>

							<span>Mileage: {item.mileage}</span>

							<span>Year: {item.year}</span>
						</div>
					);
				})}
			</main>
		);
	}
}
