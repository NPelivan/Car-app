import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import FilterAndSort from "./filterAndSort";
import Pagination from "./pagination";
import "../layouts/style.css";
import TrashIcon from "../assets/trash-icon.svg";
import AddOption from "./addOption";

class OpenSortedView extends Component {
	paginate = (pageNumber) => {
		this.props.CarStore.setPage(pageNumber);
	};
	delete = (id) => {
		this.props.CarStore.removeCar(id);
	};
	render() {
		return (
			<>
				<FilterAndSort />
				<AddOption />
				<div className="cars">
					{this.props.CarStore.currentSortedCars.map((car) => (
						<div key={car.id}>
							<button
								className="delete"
								onClick={this.delete.bind(this, car.id)}
							>
								<img src={TrashIcon} />
							</button>
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
