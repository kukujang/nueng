import React, { Component } from "react";
import photoMe from "../assets/img/me.jpg";

class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<div className="photo outer">
					<div className="inner">
						<img src={photoMe} alt="Nueng" />
					</div>
				</div>
				<h1 className="name font-style-4 align-center">Nuttaphol Anaman</h1>
				<div className="block-contact">
					<h2 className="head-subpage font-style-4">Contact:</h2>
					<ul>
						<li>Email: <a href="mailto:nueng.nuttaphol@gmail.com" target="_blank" rel="noopener noreferrer">nueng.nuttaphol@gmail.com</a></li>
						<li>LINE: <a href="http://line.me/ti/p/~kukujang" target="_blank" rel="noopener noreferrer">Kukujang</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Profile;
