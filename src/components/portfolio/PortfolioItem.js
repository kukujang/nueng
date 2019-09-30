import React, { Component } from "react";

class PortfolioItem extends Component {
	render() {
		const { title, link, source } = this.props;
		return (
			<div className="portfolio-item">
				<ul>
					<li>
						<span className="name">{title}</span>
					</li>
					<li>
						<a href={link} target="_blank" rel="noopener noreferrer">
							DEMO
						</a>
					</li>
					<li>{source}</li>
				</ul>
			</div>
		);
	}
}

export default PortfolioItem;
