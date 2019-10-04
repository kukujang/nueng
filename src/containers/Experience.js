import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";
import ExpList from "../components/exp/ExpList";
import jsonData from "../data/experience.json";

class Experience extends Component {
	
	constructor(props) {
		super(props);
		this.state = { exps: "" };
	}

	componentDidMount() {
		//console.log(jsonData);
		this.setState(jsonData);
	}

	render() {
		return (
			<div className="App">
				<div className="sidebar">
					<Profile />
				</div>
				<MainNav />
				<div className="main">
					<h1 className="head-page font-style-2">Experience</h1>
					<ExpList exps={this.state.exps} />
				</div>
			</div>
		);
	}
}

export default Experience;
