import "./Header.css";
import Navbar from "../../Components/Navbar/Navbar";

const Header = props => {
  return (
    <header className="Header">
      <h2 style={{ fontSize: props.fontSize }}>{props.title}</h2>
      <Navbar cartCount={props.cartCount} />
    </header>
  );
};

export default Header;
