import React from "react";
import { inject, observer } from "mobx-react";

import { Link } from "react-router-dom";

const AddNewCar = ({ CarStore }) => {
	const add = (e) => {
		e.preventDefault();
		CarStore.addCar(CarStore.newCarname.current.value);
	};

	return (
		<>
			<div className="add-new-car-div">
				<h1>ADD NEW CAR</h1>

				<form className="add-new-car">
					<input
						type="text"
						placeholder="Add car name"
						ref={CarStore.newCarname}
					/>
					<input
						type="text"
						placeholder="Add car model"
						ref={CarStore.newModel}
					/>
					<input
						type="number"
						placeholder="Add car mileage"
						ref={CarStore.newMileage}
					/>
					<input
						type="number"
						placeholder="Add car year"
						ref={CarStore.newYear}
					/>
					<input
						type="text"
						placeholder="Add car image URL"
						ref={CarStore.newImage}
					/>
				</form>

				<button onClick={add}>
					<Link to="/">Save New Car</Link>
				</button>
				<Link to="/">
					<button className="discard-btn">Discard New Car</button>
				</Link>
			</div>
		</>
	);
};

export default inject("CarStore")(observer(AddNewCar));
