import React from "react";
import { motion } from "framer-motion";

const frontend = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 89 },
  { name: "React", level: 85 },
  { name: "Bootstrap", level: 90 },
];

const backend = [
  { name: "Node.js", level: 76 },
  { name: "Express.js", level: 79 },
  { name: "MongoDB", level: 85 },
];

const tools = [
  { name: "GitHub", level: 90 },
  { name: "Figma", level: 75 },
];

const SkillBox = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    style={{
      background: "#1a1a1a",
      borderRadius: "18px",
      padding: "30px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.45)",
    }}
  >
    <h3 style={{ textAlign: "center", marginBottom: "25px" }}>
      {title}
    </h3>

    {skills.map((skill, index) => (
      <div key={index} style={{ marginBottom: "18px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
            fontSize: "14px",
            opacity: 0.9,
          }}
        >
          <span>{skill.name}</span>
          <span>{skill.level}%</span>
        </div>

        <div
          style={{
            height: "9px",
            background: "#2a2a2a",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.2, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              height: "100%",
              borderRadius: "8px",
              background:
                "linear-gradient(135deg, #ff9800, #ff5722)",
            }}
          />
        </div>
      </div>
    ))}
  </motion.div>
);

export default function Skills() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        padding: "60px 30px",
        color: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "50px" ,textDecoration:"underline"}}>
        My Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          Width: "90px",
          height: "auto",
          margin: "0 auto",
        }}
      >
        <SkillBox title="Frontend" skills={frontend} delay={0.1} />
        <SkillBox title="Backend" skills={backend} delay={0.2} />
        <SkillBox title="Tools & Others" skills={tools} delay={0.3} />
      </div>
    </div>
  );
}
