import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-icon active" : "nav-icon"
            }
          >
            <i className="fas fa-home"></i>
            <span className="tooltip">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-icon active" : "nav-icon"
            }
          >
            <i className="fas fa-user"></i>
            <span className="tooltip">About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-icon active" : "nav-icon"
            }
          >
            <i className="fas fa-briefcase"></i>
            <span className="tooltip">Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-icon active" : "nav-icon"
            }
          >
            <i className="fas fa-cogs"></i>
            <span className="tooltip">Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-icon active" : "nav-icon"
            }
          >
            <i className="fas fa-envelope"></i>
            <span className="tooltip">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
