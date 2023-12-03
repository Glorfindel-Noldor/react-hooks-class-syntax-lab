import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <h1 style={{ color: this.props.color }}>
          {this.classMethod()}
        </h1>
      </div>
    );
  }

  classMethod(){
    const {username , city} = this.props
    return (
      `${username} is a Web Developer from ${city}`
     )
  }

}

export default Home;
