import React, { Component } from "react";
import FilterAndSort from "./filterAndSort";
import Pagination from "./pagination";
import "../layouts/style.css";
import { inject, observer } from "mobx-react";

class OpenDefaultView extends Component {
	paginate = (pageNumber) => {
		this.props.CarStore.setPage(pageNumber);
	};
	render() {
		return (
			<>
				<FilterAndSort />
				<div className="cars">
					{this.props.CarStore.currentCars
						.filter((car) => car !== null)
						.map((car) => (
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
					totalCars={this.props.CarStore.filteredCars.length}
					paginate={this.paginate}
				/>
			</>
		);
	}
}

export default inject("CarStore")(observer(OpenDefaultView));
