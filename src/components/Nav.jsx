import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
      <Link to="/about" style={{ textDecoration: "none", color: "white" }}>About</Link>
    </nav>
  );
}

export default Nav;
