import "./App.css";
import React, { Component } from "react";
import Timer from "./Timer";
import Counter from "./Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      newDate: new Date(),
      firstName: "Goce",
    };

    // this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  }

  // componentWillMount() { console.log("COMPONENT WILL MOUNT") } // DEPRECATED cant not be used anymore with new component API

  componentDidMount() {
    // console.log("COMPONENT DID MOUNT");
    this.dateInterval = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  } // Will execute only after first render

  // componentWillUpdate() {} // DEPRECATED cant not be used anymore with new component API

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState);
  //   if (prevProps.date !== this.props.date) {
  //     return true;
  //   }
  //   console.log("SNAPSHOT BEFORE UPDATE");
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log(prevProps, prevState);
    // if (snapshot) {
    //   console.log("DATE HAS CHANGED");
    // }
    // console.log("COMPONENT DID UPDATE");
  } // will execute after every render except first (state or props changes)

  componentWillUnmount() {
    clearInterval(this.dateInterval);
  } // will execute right before removing the component from the UI

  handleFirstNameChange = (value) => {
    this.setState({ firstName: value });
  };

  render() {
    // console.log("RENDERING");
    return (
      <div>
        <Timer
          dateTime={this.state.date}
          firstName={this.state.firstName}
          changeTitle={this.handleFirstNameChange}
        />
        <Timer dateTime={this.state.newDate} firstName="Jana" />
        <Counter />
      </div>
    );
  }
}

export default App;
