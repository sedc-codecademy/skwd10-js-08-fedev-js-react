import React from "react";
import Button from "../Button/Button";

import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    //Telling react which properties are part of the state
    this.state = {
      counter: 0,
      name: "Test Testerson",
    };
  }

  add(e) {
    this.setState(prevState => {
      if (prevState.counter > 19) {
        return {
          counter: 20,
        };
      }
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  remove(e) {
    this.setState(prevState => {
      if (prevState.counter < 1) {
        return {
          counter: 0,
        };
      }
      return {
        counter: prevState.counter - 1,
      };
    });
  }

  makeUppercase() {
    this.setState(prevState => {
      return {
        name: prevState.name.toUpperCase(),
      };
    });
  }

  //Rendering jsx in classes is done with a render method
  render() {
    console.log("Render method called");
    return (
      <div className="Counter">
        <div className="display">{this.state.counter}</div>
        <div>
          <Button
            style={{ backgroundColor: "lightgreen" }}
            buttonText="Add"
            onButtonClick={this.add.bind(this)}
          />
          <Button
            style={{ backgroundColor: "lightpink" }}
            buttonText="Remove"
            onButtonClick={this.remove.bind(this)}
          />
        </div>
        <div>
          <h3>{this.state.name}</h3>
          <Button
            buttonText="UPPERCASE ME!"
            onButtonClick={this.makeUppercase.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
