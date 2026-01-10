import React, { useState } from "react";
import "./Navbar.css";
import profileImg from "./img/profile_image.png";

const Navbar = ({ fullpageApi }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMove = (section) => {
    if (fullpageApi) {
      fullpageApi.moveTo(section);
    }
    setMenuOpen(false); // close dropdown only
  };

  return (
    <nav className="navbar">
      {/* Profile Image */}
      <img src={profileImg} alt="profile" className="profile-img" />

      {/* Logo */}
      <h2 className="logo">Portfolio</h2>

      {/* Menu Icon (Mobile Only) */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li onClick={() => handleMove("hero")}>Home</li>
        <li onClick={() => handleMove("about")}>About</li>
        <li onClick={() => handleMove("projects")}>Projects</li>
        <li onClick={() => handleMove("skills")}>Skills</li>
        <li onClick={() => handleMove("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
