import { Component } from "react";
import Home from "./pages/home";
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddNewCar from "./components/addNewCar";
import VehicleMake from "./components/vehicleMake";
import vehicleMake from "./components/vehicleMake";

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					<Route exact path="/" component={Home} />
					<Route exact path="/add" component={AddNewCar} />
					<Route exact path="/makes" component={VehicleMake} />
				</Router>
			</div>
		);
	}
}

export default App;
