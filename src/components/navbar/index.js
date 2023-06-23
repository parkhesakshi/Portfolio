import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div id="navbar-section">
      <a href="#header-section" className="navbar-item">
        <p>Home</p>
      </a>
      <a href="#about-section" className="navbar-item">
        <p>About</p>
      </a>
      <a href="#education-section" className="navbar-item">
        <p>Education</p>
      </a>
      {/* <a href="#experience-section" className="navbar-item">
        <p>Experience</p>
      </a> */}
      <a href="#projects-section" className="navbar-item">
        <p>Projects</p>
      </a>
    </div>
  );
};

export default Navbar;
