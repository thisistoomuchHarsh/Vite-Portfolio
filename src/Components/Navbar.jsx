import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><NavLink to="/" className="nav-icon" activeclassname="active"><i className="fas fa-home"></i></NavLink></li>
            <li><NavLink to="/about" className="nav-icon" activeclassname="active"><i className="fas fa-user"></i></NavLink></li>
            <li><NavLink to="/projects" className="nav-icon" activeclassname="active"><i className="fas fa-briefcase"></i></NavLink></li>
            <li><NavLink to="/services" className="nav-icon" activeclassname="active"><i className="fas fa-cogs"></i></NavLink></li>
            <li><NavLink to="/contact" className="nav-icon" activeclassname="active"><i className="fas fa-envelope"></i></NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar