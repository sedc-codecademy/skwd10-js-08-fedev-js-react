import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
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
          {/* <Link to="/contact">Contact</Link> */}
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
