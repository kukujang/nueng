import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";
import SkillList from "../components/skill/SkillList";
import jsonData from "../data/skill.json";

class Skill extends Component {

	constructor(props) {
		super(props);
		this.state = { skills: "" };
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
					<h1 className="head-page font-style-2">Skill</h1>
					<SkillList skills={this.state.skills} />
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

export default Skill;
