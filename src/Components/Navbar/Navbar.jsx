import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTextColor, setNavTextColor] = useState("light");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            const bgType = entry.target.getAttribute("data-bg");
            console.log("bgType:", bgType);
            if (bgType === "light") {
              setNavTextColor("dark");
            } else {
              setNavTextColor("light");
            }
          }
        }
      },
      {
        threshold: 1,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={`navbar ${navTextColor === "dark" ? "dark-text" : "light-text"}`}>
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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
