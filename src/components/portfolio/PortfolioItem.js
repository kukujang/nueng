import React, { Component } from "react";
import shortid from 'shortid';

class PortfolioItem extends Component {
	render() {
		const { title, link, sources } = this.props;
		function getSourceItem(data) {
			return data.name===""?"":
			<span className={`item ${data.name==='Github'?'github':''}`} key={shortid.generate()}>
				<a href={data.link} target="_blank" rel="noopener noreferrer">{data.name}</a>
			</span>;
		}
		return (
			<div className="portfolio-item">
				<ul>
					<li><span className="name">{title}</span></li>
					{link===""?"":<li><a href={link} target="_blank" rel="noopener noreferrer">DEMO</a></li>}
					{sources[0].name===""?"":<li>{sources.map(getSourceItem)}</li>}
				</ul>
			</div>
		);
	}
}

export default PortfolioItem;
