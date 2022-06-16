import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div>
        <h1>TITLE</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
