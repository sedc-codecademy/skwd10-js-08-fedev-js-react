import React, { useState, useMemo, useCallback } from "react";
import "./App.css";
import List from "./List";

const expensiveFunction = (number) => {
  for (let index = 0; index < 1000000000; index++) {}
  return number * 2;
};

function App() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState("white");
  const result = useMemo(() => expensiveFunction(number), [number]);

  const calculateResult = useCallback(
    (num) => {
      return [number + num, number + 5 + num, number + 10 + num];
    },
    [number]
  );
  // const myStyles = useMemo(
  //   () => ({
  //     backgroundColor: theme === "white" ? "white" : "black",
  //     color: theme === "white" ? "black" : "white",
  //   }),
  //   [theme]
  // );
  const myStyles = {
    backgroundColor: theme === "white" ? "white" : "black",
    color: theme === "white" ? "black" : "white",
  };
  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
        value={number}
      />
      <h3>{result}</h3>
      <br />
      <button
        onClick={() =>
          setTheme((prevValue) => (prevValue === "white" ? "black" : "white"))
        }
      >
        Set New Theme
      </button>
      <div style={myStyles}>
        <List getResult={calculateResult} />
      </div>
    </div>
  );
}

export default App;
