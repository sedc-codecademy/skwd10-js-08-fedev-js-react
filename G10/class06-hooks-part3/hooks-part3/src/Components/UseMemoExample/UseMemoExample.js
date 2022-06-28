import { useState, useMemo } from "react";

const longCalculation = number => {
  //   console.log("lonc calc function called");
  for (let i = 0; i < 2000000000; i++) {}

  return number * number;
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [bgColor, setBgColor] = useState("lightgreen");

  //   const multipliedNumber = longCalculation(number);

  const multipliedNumber = useMemo(() => longCalculation(number), [number]);

  return (
    <section style={{ backgroundColor: bgColor }}>
      <h1>useMemo</h1>
      <h1>{number}</h1>
      <h1>{multipliedNumber}</h1>
      <button onClick={e => setNumber(Math.floor(Math.random() * 100))}>
        Change Number
      </button>
      <button
        onClick={e =>
          setBgColor(prevColor =>
            prevColor === "lightblue" ? "lightgreen" : "lightblue"
          )
        }
      >
        Change Background
      </button>
    </section>
  );
};

export default UseMemoExample;
