import React, { Component } from "react";

import { inject, observer } from "mobx-react";

import OpenDefaultView from "./openDefaultView";
import OpenSortedView from "./openSortedView";

class Home extends Component {
	render() {
		return this.props.CarStore.isSorted ? (
			<OpenSortedView />
		) : (
			<OpenDefaultView />
		);
	}
}

export default inject("CarStore")(observer(Home));
