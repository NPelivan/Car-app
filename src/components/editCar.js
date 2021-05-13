import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

const EditCar = ({ CarStore, match }) => {
	const {
		params: { carId },
	} = match;

	const [carname, setCarname] = useState(CarStore.cars[carId].carname);
	const [model, setModel] = useState(CarStore.cars[carId].model);
	const [mileage, setMileage] = useState(CarStore.cars[carId].mileage);
	const [year, setYear] = useState(CarStore.cars[carId].year);
	const [image, setImage] = useState(CarStore.cars[carId].image);
	const [id] = useState(CarStore.cars[carId].id);
	const [isInEditMode, setEdit] = useState(true);

	const updateCar = () => {
		CarStore.editCar(id, carname, model, mileage, year, image);
		setEdit(false);
	};

	return (
		<div>
			<h1>Edit Car</h1>

			<h3>Edit Car Name</h3>

			<input
				type="text"
				defaultValue={carname}
				ref={CarStore.editCarname}
				onChange={(event) => setCarname(CarStore.editCarname.current.value)}
				required
			/>

			<input
				type="text"
				defaultValue={model}
				ref={CarStore.editModel}
				onChange={(event) => setModel(CarStore.editModel.current.value)}
				required
			/>

			<input
				type="text"
				defaultValue={mileage}
				ref={CarStore.editMileage}
				onChange={(event) => setMileage(CarStore.editMileage.current.value)}
				required
			/>

			<input
				type="text"
				defaultValue={year}
				ref={CarStore.editYear}
				onChange={(event) => setYear(CarStore.editYear.current.value)}
				required
			/>

			<input
				type="text"
				defaultValue={image}
				ref={CarStore.editImage}
				onChange={(event) => setImage(CarStore.editImage.current.value)}
			/>

			<Link to="/">
				<button onClick={updateCar}>Save Changes</button>
			</Link>
			<Link to="/">
				<button>Discard</button>
			</Link>

			{isInEditMode ? null : ""}
		</div>
	);
};

export default inject("CarStore")(observer(EditCar));
