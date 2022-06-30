import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./Contexts/ProductsContext";

ReactDOM.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById("root")
);
