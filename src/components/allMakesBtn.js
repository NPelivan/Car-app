import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AllMakes extends Component {
	render() {
		return (
			<div>
				<Link to="/makes">
					<button>All Car Makes</button>
				</Link>
			</div>
		);
	}
}
