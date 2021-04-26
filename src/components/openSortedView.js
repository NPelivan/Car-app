import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import FilterAndSort from "./filterAndSort";
import Pagination from "./pagination";
import "../layouts/style.css";

class OpenSortedView extends Component {
	paginate = (pageNumber) => {
		this.props.CarStore.setPage(pageNumber);
	};
	render() {
		return (
			<>
				<FilterAndSort />
				<div className="cars">
					{this.props.CarStore.currentSortedCars.map((car) => (
						<div key={car.id}>
							<img src={car.image} alt="car" />

							<h2>{car.carname}</h2>

							<span>Model: {car.model}</span>

							<span>Mileage: {car.mileage}</span>

							<span>Year: {car.year}</span>
						</div>
					))}
				</div>

				<Pagination
					carsPerPage={this.props.CarStore.carsPerPage}
					totalCars={this.props.CarStore.sortedCars.length}
					paginate={this.paginate}
				/>
			</>
		);
	}
}

export default inject("CarStore")(observer(OpenSortedView));
