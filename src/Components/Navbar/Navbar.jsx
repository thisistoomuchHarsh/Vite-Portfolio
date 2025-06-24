import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="navbar">
      <div className="nav-left">
        <h2>HARSH CHAUHAN</h2>
      </div>
      <div className="nav-right">
      <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={menuOpen ? "active" : ""}>
          <li>
            {" "}
            <a href="#home">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#about">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#skills">Skills</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#projects">Projects</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
