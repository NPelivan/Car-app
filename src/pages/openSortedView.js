import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import FilterAndSort from "../components/filterAndSort";
import Pagination from "../components/pagination";
import "../layouts/style.css";
import TrashIcon from "../assets/trash-icon.svg";
import AddOption from "../components/addOption";
import AllMakesBtn from "../components/allMakesBtn";
import { Link } from "react-router-dom";

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
				<AllMakesBtn />
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

							<Link to={`/edit/${car.id}`}>
								<h2>{car.carname}</h2>
							</Link>

							<span>Model: {car.model}</span>

							<span>Mileage: {car.mileage}</span>

							<span>Year: {car.year}</span>
						</div>
					))}
				</div>

				<Pagination
					itemsPerPage={this.props.CarStore.itemsPerPage}
					totalItems={this.props.CarStore.sortedCars.length}
					paginate={this.paginate}
				/>
			</>
		);
	}
}

export default inject("CarStore")(observer(OpenSortedView));
