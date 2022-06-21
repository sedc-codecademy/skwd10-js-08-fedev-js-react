import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterChange = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleCounterChange}>Click me</button>
    </div>
  );
};

export default Counter;
