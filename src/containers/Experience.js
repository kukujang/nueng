import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";
import ExpList from "../components/exp/ExpList";
import { connect } from "react-redux";
import { expFetch } from "../actions";

class Experience extends Component {

	componentDidMount() {
		this.props.expFetch();
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
					<ExpList exps={this.props.exps} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { exps: state.exps}
}

export default connect(mapStateToProps, { expFetch })(Experience);
