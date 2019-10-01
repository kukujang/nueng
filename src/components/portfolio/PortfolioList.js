import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import shortid from 'shortid';


class PortfolioList extends Component {
	showData() {
		switch (this.props.portfolios && this.props.category) {
			case "React.js":
				return this.props.portfolios[0].works.map(port => (
					<PortfolioItem 
						key={port.id}
						title={port.title}
						desc={port.desc}
						link={port.link}
						source={port.sources.map(sources => (
							<span className="item" key={shortid.generate()}>
								<a 
									href={sources.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{sources.name}
								</a>
							</span>
						))}
					/>
				));
			case "HTML5/CSS3/Animation":
				return this.props.portfolios[1].works.map(port => (
					<PortfolioItem 
						key={port.id}
						title={port.title}
						desc={port.desc}
						link={port.link}
						source={port.sources.map(sources => (
							<span className="item" key={shortid.generate()}>
								<a 
									href={sources.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{sources.name}
								</a>
							</span>
						))}
					/>
				));
			case "HTML5/CSS3/Responsive":
				return this.props.portfolios[2].works.map(port => (
					<PortfolioItem 
						key={port.id}
						title={port.title}
						desc={port.desc}
						link={port.link}
						source={port.sources.map(sources => (
							<span className="item" key={shortid.generate()}>
								<a 
									href={sources.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{sources.name}
								</a>
							</span>
						))}
					/>
				));
			case "HTML5/CSS3":
				return this.props.portfolios[3].works.map(port => (
					<PortfolioItem 
						key={port.id}
						title={port.title}
						desc={port.desc}
						link={port.link}
						source={port.sources.map(sources => (
							<span className="item" key={shortid.generate()}>
								<a 
									href={sources.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{sources.name}
								</a>
							</span>
						))}
					/>
				));
			case "Wordpress":
				return this.props.portfolios[4].works.map(port => (
					<PortfolioItem 
						key={port.id}
						title={port.title}
						desc={port.desc}
						link={port.link}
						source={port.sources.map(sources => (
							<span className="item" key={shortid.generate()}>
								<a 
									href={sources.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{sources.name}
								</a>
							</span>
						))}
					/>
				));
			default:
				return <div className="text-center">No data</div>;
		}
	}

	render() {
		const { category } = this.props;
		return (
			<div className="portfolio-list">
				<h2 className="head-blue font-style-4">
					<span>{category}</span>
				</h2>
				{this.showData()}
			</div>
		);
	}
}

export default PortfolioList;