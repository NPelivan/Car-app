import { Component } from "react";
import Home from "./pages/home";
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddNewCar from "./components/addNewCar";
import VehicleMake from "./components/vehicleMake";
import EditCar from "./components/editCar";

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					<Route exact path="/" component={Home} />
					<Route exact path="/add" component={AddNewCar} />
					<Route exact path="/makes" component={VehicleMake} />
					<Route exact path="/edit/:carId" component={EditCar} />
				</Router>
			</div>
		);
	}
}

export default App;
