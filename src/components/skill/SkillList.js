import React, { Component } from "react";
import SkillItem from "./SkillItem";
import shortid from 'shortid';

class SkillList extends Component {

  showData() {
    if (this.props.skills) {
      return this.props.skills.map(
        skill => (
          <SkillItem key={shortid.generate()} name={skill.name} />
        )
      )
    }
  }

  render(){
    return(
      <ul className="skill-list">
        {this.showData()}
      </ul>
    );
  }
}

export default SkillList;
