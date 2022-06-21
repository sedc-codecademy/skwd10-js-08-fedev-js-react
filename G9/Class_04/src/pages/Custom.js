import React, { Component } from "react";
class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "INIT",
      isVisible: true,
    };

    // this.handleShowClick = this.handleShowClick.bind(this);
  }

  //   handleShowClick(something) {
  //     console.log(something);
  //     this.setState((prevState) => ({
  //       isVisible: !prevState.isVisible,
  //     }));
  //   }
  handleShowClick = (something) => {
    console.log(something);
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.isVisible && <h2>{this.state.title}</h2>}
        <button onClick={() => this.handleShowClick("Goce")}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
        <input
          type="text"
          onChange={this.handleTitleChange}
          value={this.state.title}
        />
      </div>
    );
  }
}

export default Custom;
