import React, { Component } from "react";

import Cars from "../components/cars";
import Header from "../components/header";
export default class home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Cars />
			</div>
		);
	}
}
