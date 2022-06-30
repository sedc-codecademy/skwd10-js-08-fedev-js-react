import moment from "moment";
import React, { useRef, useEffect, useState, Component } from "react";

// const RefExample = () => {
//   const inputRef = useRef();
//   const timeRef = useRef(Date.now());
//   const [text, setText] = useState("");
//   console.log(timeRef);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (moment().diff(timeRef.current, "minutes") >= 1) {
//         alert("You have been here for more than a minute!");
//       }
//     }, 1000 * 60);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   //   useEffect(() => {
//   //     // console.log(inputRef);
//   //     inputRef.current.focus();
//   //   }, []);

//   return (
//     <div>
//       <input
//         type="text"
//         ref={inputRef}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// };

class RefExample extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default RefExample;

// export default RefExample;
