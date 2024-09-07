import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="navigation">
        <h2 className="logo">Netflix</h2>
        <div className="buttons">
          <button className="lang-btn">English</button>
          <button className="active-btn">Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
