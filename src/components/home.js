import React from "react";

import { inject, observer } from "mobx-react";

class Home extends React.Component {
	filter = (e) => {
		e.preventDefault();
		this.props.CarStore.filter = e.target.value;
	};
	render() {
		const { filter } = this.props.CarStore;
		return (
			<main>
				<h1>All Cars</h1>
				<form onSubmit={(e = this.filter(e))}>
					<input type="text" value={filter} onChange={this.filter.bind(this)} />
				</form>

				{this.props.CarStore.currentCars
					.filter((car) => car !== null)
					.map((car) => (
						<div key={car.id}>
							<h2>{car.carname}</h2>

							<span>Model: {car.model}</span>

							<span>Mileage: {car.mileage}</span>

							<span>Year: {car.year}</span>
						</div>
					))}
			</main>
		);
	}
}

export default inject("CarStore")(observer(Home));
