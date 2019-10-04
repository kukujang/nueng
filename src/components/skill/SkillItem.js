import React, { Component } from "react";

class SkillItem extends Component {
  render(){
    const {name,percent,exp} = this.props;

    const bar = {
      right: (100-percent)+'%',
      //opacity: percent>50?1:.5,
      backgroundColor: percent<=25 ? "#222831" : percent>75 ? "#00adb5" : "#1d757d"
    }

    return(
      <li className="skill-item">
        <div className="item">
          <span className="name">{name}</span>
          <span className="exp">{exp}</span>
          <span className="bar" style={bar}>&nbsp;</span>
        </div>
      </li>
    );
  }
}

export default SkillItem;
