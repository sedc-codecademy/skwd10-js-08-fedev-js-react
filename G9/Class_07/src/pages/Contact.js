import { Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Outlet />
    </div>
  );
};

export default Contact;
