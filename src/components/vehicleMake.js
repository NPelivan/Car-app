import React, { Component } from "react";
import { inject, observer } from "mobx-react";

class VehicleMake extends Component {
	render() {
		return (
			<div>
				{this.props.CarStore.carMakes
					.filter((car) => car !== null)
					.map((car) => (
						<div key={car.id}>
							<h2>{car.make}</h2>
						</div>
					))}
			</div>
		);
	}
}

export default inject("CarStore")(observer(VehicleMake));
