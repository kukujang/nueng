import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";
import SkillList from "../components/skill/SkillList";
import { connect } from "react-redux";
import { skillFetch } from "../actions";

class Skill extends Component {

	componentDidMount() {
		this.props.skillFetch();
	}

	render() {
		return (
			<div className="App">
				<div className="sidebar">
					<Profile />
				</div>
				<MainNav />
				<div className="main">
					<h1 className="head-page font-style-2">Skill</h1>
					<SkillList skills={this.props.skills} />
					<div className="notice-skill">
						<ul>
							<li className="expert">Expert</li>
							<li className="intermediate">Intermediate</li>
							<li className="beginner">Beginner</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { skills: state.skills}
}

export default connect(mapStateToProps, { skillFetch })(Skill);
