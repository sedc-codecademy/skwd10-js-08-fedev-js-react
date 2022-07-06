import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../state/ProductContext";
import { UserContext } from "../state/UserContext";

const NavBar = () => {
  const { cart } = useContext(ProductContext);
  const { balance } = useContext(UserContext);
  console.log(balance);
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          {/* <Link to="/catalog">Catalog</Link> */}
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            Cart {cart.length > 0 ? -cart.length : ""}
          </NavLink>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/balance">Balance ({balance})</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
