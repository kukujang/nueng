import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";
import SkillList from "../components/skill/SkillList";

class Skill extends Component {

	constructor(props) {
		super(props);
		this.state = {skills:""}
	}

	componentDidMount() {
		this.setState(
			{ "skills": [ { "id": 1, "name": "HTML", "desc": "" }, { "id": 2, "name": "CSS", "desc": "" }, { "id": 3, "name": "SCSS", "desc": "" }, { "id": 4, "name": "Bootstrap", "desc": "" }, { "id": 5, "name": "HTML Email", "desc": "" }, { "id": 6, "name": "HTML5/CSS3 Animation", "desc": "" }, { "id": 7, "name": "Responsive", "desc": "" }, { "id": 8, "name": "Photoshop", "desc": "" }, { "id": 9, "name": "Basic Javascript", "desc": "" }, { "id": 10, "name": "Gulp/Grunt", "desc": "" }, { "id": 11, "name": "jQuery", "desc": "" }, { "id": 12, "name": "SEO", "desc": "" }, { "id": 13, "name": "React.js", "desc": "" }, { "id": 14, "name": "Docker", "desc": "" }, { "id": 15, "name": "Wordpress", "desc": "" }, { "id": 16, "name": "GIT", "desc": "" }, { "id": 17, "name": "GSAP", "desc": "" }, { "id": 18, "name": "Basic UX/UI", "desc": "" } ] }
		);
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
				</div>
			</div>
		);
	}
}

export default Skill;
