import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";

class Notfound extends Component {
	render() {
		return (
			<div className="App">
				<div className="sidebar">
					<Profile />
				</div>
				<MainNav />
				<div className="main">404</div>
			</div>
		);
	}
}

export default Notfound;
