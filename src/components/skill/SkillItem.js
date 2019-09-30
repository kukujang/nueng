import React, { Component } from "react";

class SkillItem extends Component {
  render(){
    const {name} = this.props;
    return(
      <li className="skill-item"><span>{name}</span></li>
    );
  }
}

export default SkillItem;
