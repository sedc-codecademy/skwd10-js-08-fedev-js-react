import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="Navbar">
      <ul>
        {props.navbarLinkData.map((linkText, i) => (
          <li key={linkText + i}>
            <a href="#">{linkText}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
