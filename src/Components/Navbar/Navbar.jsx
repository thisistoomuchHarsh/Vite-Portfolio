import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const checkHash = () => {
      const currentHash = window.location.hash || "#home";
      setActiveHash(currentHash);
    };

    checkHash(); // Initial

    // Set an interval to check hash change (since replaceState doesn't fire events)
    const interval = setInterval(checkHash, 100); // 10x/second

    return () => clearInterval(interval);
  }, []);

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
          <li><a href="#home" className={activeHash === "#home" ? "active-link" : ""}>Home</a></li>
          <li><a href="#about" className={activeHash === "#about" ? "active-link" : ""}>About</a></li>
          <li><a href="#skills" className={activeHash === "#skills" ? "active-link" : ""}>Skills</a></li>
          <li><a href="#projects" className={activeHash === "#projects" ? "active-link" : ""}>Projects</a></li>
          <li><a href="#contact" className={activeHash === "#contact" ? "active-link" : ""}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
