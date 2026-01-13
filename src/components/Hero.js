import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import Typewriter from "typewriter-effect";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={container}>
      {/* MENU BUTTON (MOBILE ONLY) */}
      <div
        className="menu-btn"
        style={menuBtn}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35 }}
          style={mobileMenu}
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </motion.div>
      )}

      {/* GLOW ORBS */}
      <div style={{ ...glowOrb, top: "20%", left: "15%" }} />
      <div style={{ ...glowOrb, bottom: "15%", right: "10%", animationDelay: "10s" }} />

      {/* PARTICLES */}
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            number: { value: 40, density: { enable: true, area: 800 } },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.25,
            },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />

      {/* 3D CANVAS */}
      <Canvas
        dpr={[1, 1.5]}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Sphere args={[1.2, 32, 32]} position={[0, 0, -2]}>
          <meshStandardMaterial color="#ff9800" wireframe />
        </Sphere>
      </Canvas>

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={content}
      >
        <h1 style={title}>
          Hi, I'm <span style={{ color: "#ff9800" }}>Rakeshkumar</span> 👋
        </h1>

        <h2 style={subtitle}>
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Frontend Specialist",
                "React Developer",
                "JavaScript Enthusiast",
                "Problem Solver",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p style={description}>
          Full Stack Developer crafting modern, responsive, and high-performance
          web applications with cutting-edge technologies.
        </p>

        {/* BUTTONS */}
        <div style={btnGroup}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={primaryBtn}
          >
            Let’s Work Together
          </motion.a>

          <motion.a
            href="/resume/Rakeshkumar-Full-Stack-Developer.pdf"
            download
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={outlineBtn}
          >
            Download CV <FaDownload style={{ marginLeft: 8 }} />
          </motion.a>
        </div>

        {/* SOCIAL ICONS */}
        <div style={socials}>
          <a href="https://github.com/Rakeshkumar972004" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rakeshkumar-elumalai-721959341" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/919025666509" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/itz_me_rakeshkumar_46" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </motion.div>

      {/* GLOBAL STYLES */}
      <style>
        {`
          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-40px); }
          }

          /* HIDE MENU ICON ON DESKTOP */
          .menu-btn {
            display: none;
          }

          /* SHOW MENU ICON ON MOBILE & TABLET */
          @media (max-width: 768px) {
            .menu-btn {
              display: block;
            }
          }

          .menu-btn svg {
            color: #fff;
          }

          a {
            text-decoration: none;
            color: #fff;
            font-size: 18px;
          }
        `}
      </style>
    </div>
  );
}

/* ================= STYLES ================= */

const container = {
  position: "relative",
  minHeight: "100vh",
  background: "#0e0e0e",
  color: "#fff",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const menuBtn = {
  position: "fixed",
  top: "20px",
  right: "20px",
  zIndex: 9999,
  fontSize: "26px",
  cursor: "pointer",
  pointerEvents: "auto",
};

const mobileMenu = {
  position: "fixed",
  top: 0,
  right: 0,
  height: "100vh",
  width: "260px",
  background: "#111",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: "40px",
  gap: "25px",
  zIndex: 9998,
};

const glowOrb = {
  position: "absolute",
  width: "260px",
  height: "260px",
  borderRadius: "50%",
  background: "radial-gradient(circle,#ff9800, transparent 70%)",
  filter: "blur(60px)",
  animation: "float 10s ease-in-out infinite",
  zIndex: 1,
};

const content = {
  zIndex: 10,
  textAlign: "center",
  maxWidth: "800px",
  padding: "20px",
};

const title = { fontSize: "42px", marginBottom: "10px" };
const subtitle = { fontSize: "22px", minHeight: "30px" };
const description = { opacity: 0.85, marginTop: "15px", fontSize: "15px" };

const btnGroup = {
  marginTop: "25px",
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
};

const primaryBtn = {
  padding: "12px 28px",
  borderRadius: "30px",
  background: "linear-gradient(135deg,#ff9800,#ff5722)",
  color: "#fff",
  fontWeight: 600,
};

const outlineBtn = {
  padding: "12px 28px",
  borderRadius: "30px",
  border: "2px solid #ff9800",
  color: "#ff9800",
  fontWeight: 600,
};

const socials = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "22px",
  fontSize: "26px",
};
