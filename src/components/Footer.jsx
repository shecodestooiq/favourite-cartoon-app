import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
      <Link to="/about" style={{ textDecoration: "none", color: "white" }}>About</Link>
    </footer>
  );
}

export default Footer;
