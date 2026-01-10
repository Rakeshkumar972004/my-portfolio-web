import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section style={section}>
      <h2 style={heading}>Education</h2>

      <div style={container}>
        {/* M.Sc */}
        <motion.div
          style={card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={degree}>M.Sc Computer Science</h3>
          <p style={college}>
            King Nandhivarman College of Arts and Science
          </p>
          <span style={date}>07/2024 – Present</span>
        </motion.div>

        {/* B.Sc */}
        <motion.div
          style={card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 style={degree}>B.Sc Computer Science</h3>
          <p style={college}>
            King Nandhivarman College of Arts and Science
          </p>
          <span style={date}>07/2021 – 05/2024</span>
        </motion.div>

        {/* HSC */}
        <motion.div
          style={card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={degree}>Higher Secondary Education</h3>
          <p style={college}>
            Govt. Boys Hr. Sec. School <br />
            State Board of Tamil Nadu
          </p>
          <span style={date}>07/2019 – 04/2021</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const section = {
  minHeight: "100vh",
  background: "#111",
  color: "#fff",
  padding: "80px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const heading = {
  fontSize: "25px",
  textDecoration: "underline",
  color: "#ccc",
  marginBottom: "40px",
};

const container = {
  maxWidth: "800px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
};

const card = {
  background: "#1a1a1a",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
};

const degree = {
  fontSize: "22px",
  marginBottom: "6px",
};

const college = {
  fontSize: "15px",
  opacity: 0.85,
  lineHeight: "1.5",
};

const date = {
  display: "inline-block",
  marginTop: "8px",
  fontSize: "13px",
  color: "#ff9800",
};
