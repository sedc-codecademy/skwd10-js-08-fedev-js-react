import { useState, useCallback } from "react";
import List from "../List/List";

const UseCallbackExample = props => {
  const [number, setNumber] = useState(0);
  const [bgColor, setBgColor] = useState("lightpink", "lightyellow");

  const generateArray = useCallback(() => {
    const result = [];
    for (let i = 0; i <= number; i++) {
      result.push(i);
    }
    return result;
  }, [number]);

  //   const generateArray = () => {
  //     const result = [];
  //     for (let i = 0; i <= number; i++) {
  //       result.push(i);
  //     }
  //     return result;
  //   };

  return (
    <section style={{ backgroundColor: bgColor }}>
      <h1>useCallback</h1>
      <h2>{number}</h2>
      <List generateArray={generateArray} />
      <button onClick={e => setNumber(Math.floor(Math.random() * 100))}>
        Change Number
      </button>
      <button
        onClick={e =>
          setBgColor(prevColor =>
            prevColor === "lightpink" ? "lightyellow" : "lightpink"
          )
        }
      >
        Change Background
      </button>
    </section>
  );
};

export default UseCallbackExample;
