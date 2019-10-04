import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";
import PortfolioList from "../components/portfolio/PortfolioList";
import jsonData from '../data/portfolio.json'

class Portfolio extends Component {
	
	constructor(props) {
		super(props);
		this.state = { portfolios: "" };
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
				<div className="main portfolio">
					<h1 className="head-page font-style-2">Portfolio</h1>
					<PortfolioList
						portfolios={this.state.portfolios}
						category="React.js"
					/>
					<PortfolioList
						portfolios={this.state.portfolios}
						category="HTML5/CSS3/Animation"
					/>
					<PortfolioList
						portfolios={this.state.portfolios}
						category="HTML/CSS/Responsive"
					/>
					<PortfolioList
						portfolios={this.state.portfolios}
						category="HTML/CSS"
					/>
					<PortfolioList
						portfolios={this.state.portfolios}
						category="Wordpress"
					/>
				</div>
			</div>
		);
	}
}

export default Portfolio;
