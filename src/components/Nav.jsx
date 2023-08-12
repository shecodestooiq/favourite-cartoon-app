import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
      <Link to="/favorites" style={{ textDecoration: "none", color: "white" }}>Favorites</Link>
    </nav>
  );
}

export default Nav;
