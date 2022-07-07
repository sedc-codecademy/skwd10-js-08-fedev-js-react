import classes from "./Header.module.css";
import Navbar from "../../Components/Navbar/Navbar";

const Header = props => {
  return (
    <header className={classes.Header}>
      <h2 style={{ fontSize: props.fontSize }}>{props.title}</h2>
      <Navbar />
    </header>
  );
};

export default Header;
