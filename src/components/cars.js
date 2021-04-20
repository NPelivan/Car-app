import React, { Component } from "react";

import { inject, observer } from "mobx-react";

import Pagination from "./pagination";

import "../layouts/style.css";

class Cars extends Component {
	filter = (e) => {
		e.preventDefault();
		this.props.CarStore.filter = e.target.value;
	};

	sort = (e) => {
		this.props.CarStore.isSorted = true;
	};

	paginate = (pageNumber) => {
		this.props.CarStore.setPage(pageNumber);
	};

	render() {
		const { filter } = this.props.CarStore;
		const filterAndSort = () => {
			return (
				<>
					<div className="filter-sort">
						<button onClick={this.sort}>Sort A-Z</button>
						<form onSubmit={(e) => this.filter(e)}>
							<input
								type="text"
								value={filter}
								onChange={this.filter.bind(this)}
								placeholder="Search"
							/>
						</form>
					</div>
				</>
			);
		};

		const openDefaultView = () => {
			return (
				<>
					{filterAndSort()}
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
		};

		const openSortedView = () => {
			return (
				<>
					{filterAndSort()}

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
		};

		return this.props.CarStore.isSorted ? openSortedView() : openDefaultView();
	}
}

export default inject("CarStore")(observer(Cars));
