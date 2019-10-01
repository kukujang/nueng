import React, { Component } from "react";

// img
import photoMe from "../assets/img/me.jpg";
import photoMe2x from "../assets/img/me-2x.jpg";

class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<div className="photo outer">
					<div className="inner">
						<img src={photoMe} alt="Nueng" srcSet={photoMe2x+' 2x'} />
					</div>
				</div>
				<h1 className="name font-style-4 align-center">Nuttaphol Anaman</h1>
				<div className="block-contact">
					<h2 className="head-subpage font-style-4">Contact:</h2>
					<ul className="clearfix">
						<li><a href="mailto:nueng.nuttaphol@gmail.com" className="email" target="_blank" rel="noopener noreferrer">nueng.nuttaphol@gmail.com</a></li>
						<li><a href="http://line.me/ti/p/~kukujang" className="line" target="_blank" rel="noopener noreferrer">LINE</a></li>
						<li><a href="https://www.facebook.com/kukujang" className="facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
						<li><a href="https://github.com/kukujang" className="github" target="_blank" rel="noopener noreferrer">Github</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Profile;
