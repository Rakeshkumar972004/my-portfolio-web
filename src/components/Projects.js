import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

import fruitvegeImage from "./img/fruitandvege image.png";
import hospitalImage from "./img/hospitalimage.png";
import landingImage from "./img/landingimg.png";
import movieImage from "./img/movieimage.png";
import Employeeimage from "./img/Employeeimage.png";
import QRcodeimage from "./img/QRcodeimage.png";
import Matchimage from "./img/matchimage.jpg";
import Recipeimage from "./img/Recipeimage.png";

const projects = [
  {
    title: "Fruit & Vegetable Ecommerce Website",
    description:
      "An ecommerce platform for buying fresh fruits and vegetables online. Built with a user-friendly interface for easy browsing and ordering.",
    image: fruitvegeImage,
  },
  {
    title: "Hospital Management System",
    description:
      "A full stack system to manage patients, doctors, and appointments efficiently. Helps streamline hospital operations and data handling.",
    image: hospitalImage,
  },
  {
    title: "Landing Page Design",
    description:
      "A modern and responsive landing page designed for a startup. Focuses on clean UI, smooth layout, and user engagement.",
    image: landingImage,
  },
  {
    title: "Movie Booking System",
    description:
      "A web application for browsing movies and booking tickets online. Provides an easy and interactive booking experience.",
    image: movieImage,
  },
  {
    title: "Employee Management System",
    description:
      "A full stack application to manage employee records and details. Simplifies employee data management and tracking.",
    image: Employeeimage,
  },
  {
    title: "QR Code Generator",
    description:
      "A simple JavaScript tool to generate QR codes from text or URLs. Useful for sharing links quickly and securely.",
    image: QRcodeimage,
  },
  {
    title: "Match Masters Game",
    description:
      "A memory-based card matching game developed using JavaScript. Helps improve concentration and logical thinking.",
    image: Matchimage,
  },
  {
    title: "Recipe Finder Website",
    description:
      "A React-based website to search and explore recipes using APIs. Allows users to find ingredients and cooking instructions easily.",
    image: Recipeimage,
  },
];


export default function Projects() {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[index];

  return (
    <div
      style={{
        padding: "30px",
        background: "#0e0e0e",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#fff",
          textDecoration: "underline",
        }}
      >
        Projects
      </h2>

      {/* SINGLE PROJECT */}
      <div className="single-project">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.5 }}
            className="project-card"
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* NAV BUTTONS */}
        <div className="vertical-controls">
          <button onClick={prevProject}>↑ Prev</button>
          <span>{index + 1} / {projects.length}</span>
          <button onClick={nextProject}>↓ Next</button>
        </div>
      </div>
    </div>
  );
}
