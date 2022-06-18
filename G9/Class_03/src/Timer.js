import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { isDone: false, firstName: props.firstName };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      Math.floor(new Date(this.props.dateTime).getTime() / 1000) >=
      Math.floor(new Date("Sat Jun 18 2022 11:36:00").getTime() / 1000)
    ) {
      console.log("GREATER");
      if (!this.state.isDone) {
        this.setState({ isDone: true });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.firstName}</h1>
        {/* Dont be affraid this is intro for next class
        <input
          type="text"
          onChange={(event) => this.props.changeTitle(event.target.value)}
          value={this.props.firstName}
        /> */}
        <p>
          {!this.state.isDone
            ? this.props.dateTime.toLocaleTimeString()
            : "FINISHED"}
        </p>
        {/* <p>{this.state.customDate.toTimeString()}</p> */}
      </div>
    );
  }
}

export default Timer;
