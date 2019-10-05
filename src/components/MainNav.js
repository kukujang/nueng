import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MainNav extends Component {
	render() {
		return (
			<div className="main-nav">
				<ul className="clearfix font-style-5">
					<li>
						<NavLink exact to="/" activeClassName="active">Profile</NavLink>
					</li>
					<li>
						<NavLink to="/skill" activeClassName="active">Skill</NavLink>
					</li>
					<li>
						<NavLink to="/experience" activeClassName="active">Experience</NavLink>
					</li>
					<li>
						<NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

export default MainNav;
