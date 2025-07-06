import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><AnchorLink href="#home" className="navbar-link">Home</AnchorLink></li>
        <li><AnchorLink href="#about" className="navbar-link">About Me</AnchorLink></li>
        <li><AnchorLink href="#skills" className="navbar-link">Skills</AnchorLink></li>
        <li><AnchorLink href="#works" className="navbar-link">Portfolio</AnchorLink></li>
        <li><AnchorLink href="#contact" className="navbar-link">Contact</AnchorLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
