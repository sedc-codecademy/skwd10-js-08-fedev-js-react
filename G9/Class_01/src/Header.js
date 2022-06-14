import React from "react";
import logo from "./logo.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" width="50px" height="50px" />
        <span className="appTitle">My App</span>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
