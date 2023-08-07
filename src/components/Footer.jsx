import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
      <Link to="/favorites" style={{ textDecoration: "none", color: "white" }}>Favorites</Link>
    </footer>
  );
}

export default Footer;
