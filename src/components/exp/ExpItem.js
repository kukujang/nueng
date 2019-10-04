import React, { Component } from "react";

class ExpItem extends Component {
	render() {
		const { company, photo, photo2x, when, desc } = this.props;
		return (
			<div className="exp-item">
				<h2 className="head-blue font-style-4">
					<span>
						{company} ({when})
					</span>
				</h2>
				{photo===""?"":<div className="pic"><img src={photo} srcSet={photo2x+' 2x'} alt={company} /></div>}
				<h3 className="head-subpage font-style-4">รายละเอียด</h3>
				{desc}
			</div>
		);
	}
}

export default ExpItem;
