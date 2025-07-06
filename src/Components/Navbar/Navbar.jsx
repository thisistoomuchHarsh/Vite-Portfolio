import "./Navbar.css";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";


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
    <motion.div
    className="navbar"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
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
    </motion.div>
  );
};

export default Navbar;
