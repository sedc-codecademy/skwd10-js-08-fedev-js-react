import React from "react";
// import ReactDOM from 'react-dom/client'; //* V18 React DOM Import
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom"; //* V17 React DOM Import

//* Version 17 Boostrap
ReactDOM.render(<App />, document.getElementById("root"));

//* Version 18 Boostrap Code
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
