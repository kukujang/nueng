import React, { Component } from "react";
import SkillItem from "./SkillItem";

class SkillList extends Component {

  showData() {
    if (this.props.skills) {
      return this.props.skills.map(
        skill => (
          <SkillItem name={skill.name} />
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
