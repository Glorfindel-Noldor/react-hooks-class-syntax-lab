import React from "react";
import Links from "./Links";

class About extends React.Component {
  render() {
    const { github, linkedin } = this.props.links;

    return (
      <div id="about">
        <h2>About Me</h2>
        {this.classMethod()}
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={github} linkedin={linkedin} />
      </div>
    );
  }

  classMethod() {
    const { bio } = this.props;
    return bio && bio.length > 1 ? <p>{bio}</p> : null;
  }
}

export default About;
