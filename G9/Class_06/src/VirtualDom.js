import React, { useEffect, useState, useRef } from "react";

const VirtualDom = () => {
  //   const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const inputRef = useRef();
  // const updateCount = useRef(0);
  // console.log(updateCount);
  console.log(inputRef);
  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);
  return (
    <div>
      {/* <h2>NAME: {name}</h2>
      <input onChange={(e) => setName(e.target.value)} value={name} /> */}
      <h2>Age: {inputRef?.current?.value}</h2>
      <input
        ref={inputRef}
        type="number"
        onChange={(e) => {
          // setAge(parseInt(e.target.value));
          // updateCount.current = updateCount.current + 1;
        }}
        value={inputRef?.current?.value}
      />
      <button
        onClick={() => {
          inputRef.current = 100;
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default VirtualDom;
