import React, { useState, useEffect } from "react";
import "./Navbar.css";
import profileImg from "./img/profile_image.png";

const Navbar = ({ fullpageApi }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle navigation + active highlight
  const handleMove = (section) => {
    if (fullpageApi) {
      fullpageApi.moveTo(section);
    }
    setActiveSection(section);
    setMenuOpen(false); // close mobile menu
  };

  // Detect active section on scroll (fallback)
  useEffect(() => {
    const onScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"];

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(sec);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      {/* Profile Image */}
      <img src={profileImg} alt="profile" className="profile-img" />

      {/* Logo */}
      <h2 className="logo">Portfolio</h2>

      {/* Menu Icon (Mobile Only via CSS) */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li
          className={activeSection === "hero" ? "active" : ""}
          onClick={() => handleMove("hero")}
        >
          Home
        </li>

        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => handleMove("about")}
        >
          About
        </li>

        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleMove("projects")}
        >
          Projects
        </li>

        <li
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => handleMove("skills")}
        >
          Skills
        </li>

        <li
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => handleMove("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
