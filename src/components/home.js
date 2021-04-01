import React, { Component } from "react";
import Mercedes from "../layouts/images/mercedesbenz.png";
import Bmw from "../layouts/images/bmw.png";
import Ford from "../layouts/images/ford.png";
import Skoda from "../layouts/images/skoda.png";
import Volkswagen from "../layouts/images/volkswagen.png";
import Renault from "../layouts/images/renault.png";
import Volvo from "../layouts/images/volvo.png";

import "../layouts/Home styles/style.css";

export default class Home extends Component {
	render() {
		return (
			<main>
				<h1>Car Marks</h1>

				<section>
					<div className="card">
						<img src={Mercedes} alt="Mercedes Benz" />
						<h2>Mercedes Benz</h2>
					</div>

					<div className="card">
						<img src={Renault} alt="Renault" />
						<h2>Renault</h2>
					</div>

					<div className="card">
						<img src={Bmw} alt="BMW" />
						<h2>BMW</h2>
					</div>

					<div className="card">
						<img src={Volkswagen} alt="Volkswagen" />
						<h2>Volkswagen</h2>
					</div>

					<div className="card">
						<img src={Volvo} alt="Volvo" />
						<h2>Volvo</h2>
					</div>

					<div className="card">
						<img src={Ford} alt="Ford" />
						<h2>Ford</h2>
					</div>

					<div className="card">
						<img src={Skoda} alt="Skoda" />
						<h2>Skoda</h2>
					</div>
				</section>
			</main>
		);
	}
}
