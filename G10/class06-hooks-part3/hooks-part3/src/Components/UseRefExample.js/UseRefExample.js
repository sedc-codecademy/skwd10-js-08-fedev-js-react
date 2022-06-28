import { useState, useRef, useEffect } from "react";

const UseRefExample = props => {
  const [rerenderToggle, setRerenderToggle] = useState(false);
  const [count, setCount] = useState(0);

  //*Creating a ref for an html element
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //! DO NOT READ VALUES WITH REFS BAD IDEA!!!
  const getInputValue = () => {
    console.log(inputRef.current.value);
  };

  console.log(inputRef.current);

  let rerenderCount = 0;
  const rerenderCountRef = useRef(0);

  console.log("Component Rerendered");

  const addToRerenderCount = () => {
    rerenderCountRef.current++;
    rerenderCount++;
    setRerenderToggle(!rerenderToggle);
  };

  //   console.log(rerenderCountRef.current);
  //   console.log(rerenderCount);

  let intervalIdRef = useRef(0);

  const startStopwatch = () => {
    intervalIdRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    console.log(intervalIdRef.current);
  };

  const stopStopwatch = () => {
    console.log(intervalIdRef.current);
    clearInterval(intervalIdRef.current);
  };

  return (
    <section>
      <h1>useRef</h1>
      <div>
        <button onClick={e => addToRerenderCount()}>Rerender Component</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={e => startStopwatch()}>START</button>
        <button onClick={e => stopStopwatch()}>END</button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={e => inputRef.current.focus()}>Focus Input</button>
      </div>
    </section>
  );
};

export default UseRefExample;
