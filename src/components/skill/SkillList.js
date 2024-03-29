import React, { Component } from "react";
import SkillItem from "./SkillItem";
import shortid from 'shortid';

class SkillList extends Component {

  showData() {
    if (this.props.skills.skills) {
      return this.props.skills.skills.map(
        skill => (
          <SkillItem key={shortid.generate()} name={skill.name} percent={skill.percent} exp={skill.exp} />
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
