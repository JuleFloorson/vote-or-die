import React from "react";
import "./Footer.css";
import votePic from "./vote.png";

function Footer() {
  return (
    <footer className="footer ">
      <img className="votePic" src={votePic} alt="vote" />
    </footer>
  );
}
export default Footer;
