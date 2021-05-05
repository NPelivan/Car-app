import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddOption extends Component {
	render() {
		return (
			<div className="add">
				<Link to="makes">
					<button>Add New Car</button>
				</Link>
			</div>
		);
	}
}
