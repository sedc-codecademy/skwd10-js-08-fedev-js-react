import "./Header.css";
import Navbar from "../../Components/Navbar/Navbar";
import ThemeToggle from "../../Components/ThemeToggle/ThemeToggle";

const Header = props => {
  return (
    <header className="Header">
      <h2 style={{ fontSize: props.fontSize }}>{props.title}</h2>
      <ThemeToggle />
      <Navbar />
    </header>
  );
};

export default Header;
