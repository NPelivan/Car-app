import { Component } from "react";
import Home from "./pages/home";
import Header from "./components/header";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Home />
			</div>
		);
	}
}

export default App;
