import React, { Component } from "react";
import ExpItem from "./ExpItem";
import shortid from 'shortid';

class ExpList extends Component {
	showData() {
		if (this.props.exps) {
			return this.props.exps.map(exp => (
				<ExpItem key={shortid.generate()} company={exp.company} photo={exp.photo} photo2x={exp.photo2x} when={exp.when} desc={exp.desc} />
			));
		}
	}

	render() {
		return <div className="exp-list">{this.showData()}</div>;
	}
}

export default ExpList;
