import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div style={container}>
      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={spinner}
      />

      {/* Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
        style={{ marginTop: "20px" }}
      >
        Loading Portfolio...
      </motion.h2>
    </div>
  );
}

/* styles */
const container = {
  height: "100vh",
  background: "#0e0e0e",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
};

const spinner = {
  width: "60px",
  height: "60px",
  border: "6px solid #333",
  borderTop: "6px solid orange",
  borderRadius: "50%",
};
