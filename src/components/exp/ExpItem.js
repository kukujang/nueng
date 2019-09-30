import React, { Component } from "react";

class ExpItem extends Component {
	render() {
		const { company, when, desc } = this.props;
		return (
			<div className="exp-item">
				<h2 className="head-blue font-style-4">
					<span>
						{company} ({when})
					</span>
				</h2>
				<h3 className="head-subpage font-style-4">รายละเอียด</h3>
				{desc}
			</div>
		);
	}
}

export default ExpItem;
