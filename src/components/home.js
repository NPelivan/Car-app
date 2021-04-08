import React, { Component } from "react";

import { inject, observer } from "mobx-react";

@inject("CarStore")
@observer
export default class Home extends React.Component {
	sort = (e) => {
		this.props.CarStore.isSorted = true;
	};
	render() {
		const { filter } = this.props.CarStore;
		return (
			<main>
				<h1>All Cars</h1>

				{this.props.CarStore.filter((car) => car !== null).map((car) => (
					<div>
						<h2>{car.carname}</h2>

						<button onClick={this.sortx}>Sort A-Z</button>

						<span>Model: {car.model}</span>

						<span>Mileage: {car.mileage}</span>

						<span>Year: {car.year}</span>
					</div>
				))}
			</main>
		);
	}
}
