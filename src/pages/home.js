import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import FilterAndSort from "../components/filterAndSort";
import OpenDefaultView from "../components/openDefaultView";
import OpenSortedView from "../components/openSortedView";

class Home extends Component {
	render() {
		const filterAndSort = () => {
			return <FilterAndSort />;
		};

		const openDefaultView = () => {
			return <OpenDefaultView />;
		};

		const openSortedView = () => {
			return <OpenSortedView />;
		};

		return this.props.CarStore.isSorted ? openSortedView() : openDefaultView();
	}
}

export default inject("CarStore")(observer(Home));
