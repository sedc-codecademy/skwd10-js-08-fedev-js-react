import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const navbarLinkData = [
  {
    text: "🏠",
    href: "/products",
  },
  {
    text: "🛒",
    href: "/cart",
  },
];

const Navbar = ({ cartCount }) => {
  return (
    <nav className="Navbar">
      <ul>
        {navbarLinkData.map((link, i) => (
          <li key={i}>
            <NavLink to={link.href}>
              {link.text}
              {link.href === "/cart" && <strong>{cartCount}</strong>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
