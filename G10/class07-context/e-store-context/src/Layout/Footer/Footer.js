import "./Footer.css";

const Footer = props => {
  return (
    <footer className="Footer">
      <div>{props.children}</div>
      <small>&copy; Borisovski Borche 2022</small>
    </footer>
  );
};

export default Footer;
