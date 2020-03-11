import React from "react";
import "./Header.css";
import Logo from "./logo.png";
function Header() {
  return (
    <header className="header ">
      <img className="logo" src={Logo} alt="green haken" />
      <h1 className="heading">Votinator</h1>
    </header>
  );
}
export default Header;
