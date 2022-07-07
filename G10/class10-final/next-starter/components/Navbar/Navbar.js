import classes from "./Navbar.module.css";
import Link from "next/link";

const navbarLinkData = [
  {
    text: "Products",
    href: "/products",
  },
  {
    text: "Todos",
    href: "/todos",
  },
  {
    text: "People",
    href: "/people",
  },
];

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <ul>
        {navbarLinkData.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
