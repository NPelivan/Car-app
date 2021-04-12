import { observable, computed, makeObservable } from "mobx";

class CarStore {
	//isStored = false;

	cars = [
		{
			id: 1,
			carname: "Mercedes Benz",
			model: "E 250D",
			mileage: "350 000",
			year: "1993",
		},

		{
			id: 2,
			carname: "Audi",
			model: "A 5",
			mileage: "150 000",
			year: "2008",
		},

		{
			id: 3,
			carname: "Renault",
			model: "Twingo",
			mileage: "215 000",
			year: "2000",
		},

		{
			id: 4,
			carname: "BMW",
			model: "E34",
			mileage: "78 000",
			year: "1991",
		},

		{
			id: 5,
			carname: "Volvo",
			model: "123 GT (Amazon)",
			mileage: "120 000",
			year: "1967",
		},

		{
			id: 6,
			carname: "Volkswagen",
			model: "Type 2",
			mileage: "35 000",
			year: "1951",
		},

		{
			id: 7,
			carname: "Subaru",
			model: "Crosstrek",
			mileage: "250 000",
			year: "2015",
		},

		{
			id: 8,
			carname: "Mercedes Benz",
			model: "E500",
			mileage: "35 000",
			year: "1994",
		},

		{
			id: 9,
			carname: "Ford",
			model: "Mustang",
			mileage: "264 000",
			year: "1968",
		},

		{
			id: 10,
			carname: "BMW",
			model: "X5",
			mileage: "298 000",
			year: "2001",
		},

		{
			id: 11,
			carname: "Mitsubishi",
			model: "Lancer EVO X",
			mileage: "450 000",
			year: "2013",
		},

		{
			id: 12,
			carname: "Tesla",
			model: "Model 3",
			mileage: "100 000",
			year: "2021",
		},

		{
			id: 13,
			carname: "Cadillac",
			model: "Eldorado",
			mileage: "500 000",
			year: "1986",
		},

		{
			id: 14,
			carname: "Rolls Royce",
			model: "Phantom VIII",
			mileage: "25 000",
			year: "2017",
		},
	];
	/*
	get sortedCars() {
		return this.filteredCars
			.filter((car) => car !== null)
			.slice()
			.sort((a, b) => (a.VehicleMake > b.VehicleMake ? 1 : -1));
	}
	*/
	currentPage = 1;
	carsPerPage = 5;

	indexOfLastCar = this.currentPage * this.carsPerPage;
	indexOfFirstCar = this.indexOfLastCar - this.carsPerPage;

	get currentCars() {
		return this.filteredCars.slice(this.indexOfFirstCar, this.indexOfLastCar);
	}

	filter = "";
	get filteredCars() {
		let matchesFilter = new RegExp(this.filter, "i");
		return this.cars
			.filter((car) => car !== null)
			.filter((car) => !this.filter || matchesFilter.test(car.carname));
	}

	constructor(cars) {
		makeObservable(this, {
			cars: observable,
			currentPage: observable,
			carsPerPage: observable,
			indexOfLastCar: observable,
			indexOfFirstCar: observable,
			currentCars: computed,
			filter: observable,
			filteredCars: computed,
		});
		this.cars = cars;
	}
}

const store = new CarStore();

export default store;
