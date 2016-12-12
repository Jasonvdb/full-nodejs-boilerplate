import "./app.scss";

import React, {Component} from "react";

class AppContainer extends Component {
	componentDidMount() {
		console.log('Helllo mounting...');
	}

	render() {
		return <h1>Hello world!</h1>;
	}
}

export default AppContainer;
