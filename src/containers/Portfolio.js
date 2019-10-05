import React, { Component } from "react";
import Profile from "../components/Profile";
import MainNav from "../components/MainNav";
import PortfolioList from "../components/portfolio/PortfolioList";
import { connect } from "react-redux";
import { portfolioFetch } from "../actions";

class Portfolio extends Component {

	componentDidMount() {
		this.props.portfolioFetch();
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
						portfolios={this.props.portfolios}
						category="React.js"
					/>
					<PortfolioList
						portfolios={this.props.portfolios}
						category="HTML5/CSS3/Animation"
					/>
					<PortfolioList
						portfolios={this.props.portfolios}
						category="HTML/CSS/Responsive"
					/>
					<PortfolioList
						portfolios={this.props.portfolios}
						category="HTML/CSS"
					/>
					<PortfolioList
						portfolios={this.props.portfolios}
						category="Wordpress"
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { portfolios: state.portfolios}
}

export default connect(mapStateToProps, { portfolioFetch })(Portfolio);
