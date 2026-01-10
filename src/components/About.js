import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
style={{
  background: "#0e0e0e",
  color: "#fff",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}}>

  
      {/* Main Box */}
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "#1a1a1a",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Title */}
        <h2 style={{ textAlign: "center", marginBottom: "20px",textDecoration:"underline" }}>
          About Me
        </h2>

        <p style={{ textAlign: "center", opacity: 0.8, marginBottom: "35px" }}>
          Passionate about creating innovative solutions and pushing the
          boundaries of modern web development.
        </p>

        {/* Info Box */}
        <div
          style={{
            background: "#222",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "30px",
            textAlign:"center"
          }}
        >
          <h3>Who I Am</h3>
          <p style={{ opacity: 0.85 }}>
            I'm a passionate developer with expertise in building scalable web
            applications. I love solving complex problems and turning ideas into
            reality through clean, efficient code.
          </p>

          <p style={{ opacity: 0.85 }}>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or solving algorithmic
            challenges.
          </p>
        </div>

        {/* Call To Action Box */}
        <div
          style={{
            background: "linear-gradient(135deg, #ff9800, #ff5722)",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>Ready to Start Your Project?</h2>
          <p style={{ margin: "10px 0 20px" }}>
            Let’s collaborate and bring your ideas to life with modern
            technologies and beautiful design.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              padding: "12px 30px",
              borderRadius: "30px",
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
