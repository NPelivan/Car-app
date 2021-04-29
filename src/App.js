import { Component } from "react";
import Home from "./pages/home";
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddNewCar from "./components/addNewCar";

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					<Route exact path="/" component={Home} />
					<Route exact path="/add" component={AddNewCar} />
				</Router>
			</div>
		);
	}
}

export default App;
