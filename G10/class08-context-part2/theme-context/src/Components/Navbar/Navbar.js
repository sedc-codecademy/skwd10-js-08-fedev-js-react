import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const navbarLinkData = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        {navbarLinkData.map((link, i) => (
          <li key={i}>
            <NavLink to={link.href}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
