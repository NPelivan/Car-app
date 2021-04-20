import { observable, computed, makeObservable, action } from "mobx";

class CarStore {
	cars = [
		{
			id: 1,
			carname: "Mercedes Benz",
			model: "E 250D",
			mileage: "340 000km",
			year: "1993",
			image: "/img/250d.jpg",
		},

		{
			id: 2,
			carname: "Audi",
			model: "A 5",
			mileage: "150 000km",
			year: "2008",
			image: "/img/a5.jpg",
		},

		{
			id: 3,
			carname: "Renault",
			model: "Twingo",
			mileage: "215 000km",
			year: "2000",
			image: "/img/twingo.jpg",
		},

		{
			id: 4,
			carname: "BMW",
			model: "E34",
			mileage: "78 000km",
			year: "1991",
			image: "/img/e34.jpg",
		},

		{
			id: 5,
			carname: "Volvo",
			model: "123 GT (Amazon)",
			mileage: "120 000km",
			year: "1967",
			image: "/img/amazon.jpg",
		},

		{
			id: 6,
			carname: "Volkswagen",
			model: "Type 2",
			mileage: "35 000km",
			year: "1951",
			image: "/img/type2.jpg",
		},

		{
			id: 7,
			carname: "Subaru",
			model: "Crosstrek",
			mileage: "250 000km",
			year: "2015",
			image: "/img/crosstrek.jpg",
		},

		{
			id: 8,
			carname: "Mercedes Benz",
			model: "E500",
			mileage: "35 000km",
			year: "1994",
			image: "/img/e500.jpg",
		},

		{
			id: 9,
			carname: "Ford",
			model: "Mustang",
			mileage: "264 000km",
			year: "1968",
			image: "/img/mustang.jpg",
		},

		{
			id: 10,
			carname: "BMW",
			model: "X5",
			mileage: "298 000km",
			year: "2003",
			image: "/img/x5.jfif",
		},

		{
			id: 11,
			carname: "Mitsubishi",
			model: "Lancer EVO X",
			mileage: "450 000km",
			year: "2013",
			image: "/img/lancer.jpg",
		},

		{
			id: 12,
			carname: "Tesla",
			model: "Model 3",
			mileage: "100 000km",
			year: "2021",
			image: "/img/tesla.jpg",
		},

		{
			id: 13,
			carname: "Cadillac",
			model: "Eldorado",
			mileage: "500 000km",
			year: "1986",
			image: "/img/eldorado.jpg",
		},

		{
			id: 14,
			carname: "Rolls Royce",
			model: "Phantom VIII",
			mileage: "25 000km",
			year: "2017",
			image: "/img/phantom.jpg",
		},

		{
			id: 15,
			carname: "Opel",
			model: "Manta A",
			mileage: "390 000km",
			year: "1975",
			image: "/img/manta.jpg",
		},

		{
			id: 16,
			carname: "Zastava",
			model: "1300/1500",
			mileage: "268 000km",
			year: "1962",
			image: "/img/tristac.jpg",
		},

		{
			id: 17,
			carname: "Dacia",
			model: "Duster",
			mileage: "186 000km",
			year: "2010",
			image: "/img/duster.jfif",
		},
	];

	isSorted = false;
	filter = "";

	currentPage = 1;
	carsPerPage = 6;

	indexOfLastCar = this.currentPage * this.carsPerPage;
	indexOfFirstCar = this.indexOfLastCar - this.carsPerPage;

	get currentCars() {
		return this.filteredCars.slice(this.indexOfFirstCar, this.indexOfLastCar);
	}

	get filteredCars() {
		let matchesFilter = new RegExp(this.filter, "i");
		return this.cars
			.filter((car) => car !== null)
			.filter((car) => !this.filter || matchesFilter.test(car.carname));
	}

	get currentSortedCars() {
		return this.sortedCars.slice(this.indexOfFirstCar, this.indexOfLastCar);
	}

	get sortedCars() {
		return this.filteredCars
			.filter((car) => car !== null)
			.slice()
			.sort((a, b) => (a.carname > b.carname ? 1 : -1));
	}

	setPage = (pageNumber) => {
		this.currentPage = pageNumber;
		this.indexOfLastCar = this.currentPage * this.carsPerPage;
		this.indexOfFirstCar = this.indexOfLastCar - this.carsPerPage;
	};

	constructor(cars) {
		makeObservable(this, {
			isSorted: observable,
			cars: observable,
			currentPage: observable,
			carsPerPage: observable,
			indexOfLastCar: observable,
			indexOfFirstCar: observable,
			currentCars: computed,
			filter: observable,
			filteredCars: computed,
			currentSortedCars: computed,
			sortedCars: computed,
			setPage: action,
		});
	}
}

const store = new CarStore();

export default store;
