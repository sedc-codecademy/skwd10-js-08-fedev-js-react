import { Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../state/ProductContext";
const Contact = () => {
  const state = useContext(ProductContext);
  console.log(state);
  return (
    <div>
      <h1>Contact</h1>
      <Outlet />
    </div>
  );
};

export default Contact;
