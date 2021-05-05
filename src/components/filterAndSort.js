import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import "../layouts/style.css";

class FilterAndSort extends Component {
	filter = (e) => {
		e.preventDefault();
		this.props.CarStore.filter = e.target.value;
	};

	sort = (e) => {
		this.props.CarStore.isSorted = true;
	};
	render() {
		const { filter } = this.props.CarStore;

		return (
			<>
				<div className="filter-sort">
					<button onClick={this.sort}>Sort A-Z</button>
					<form onSubmit={(e) => this.filter(e)}>
						<input
							type="text"
							value={filter}
							onChange={this.filter.bind(this)}
							placeholder="Search e.g. BMW"
						/>
					</form>
				</div>
			</>
		);
	}
}
export default inject("CarStore")(observer(FilterAndSort));
