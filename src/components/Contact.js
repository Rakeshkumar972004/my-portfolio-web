import { motion } from "framer-motion";
import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div style={{ background: "#0e0e0e", color: "#fff" }}>
      {/* CONTACT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        {/* Main Container */}
        <div className="contact-container"
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          {/* LEFT BOX */}
          <motion.div className="contact-box" style={infoBox}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}

          >
            <h2>Let’s Connect</h2>
            <p style={{ opacity: 0.85, marginBottom: "25px" }}>
              I'm available for full-time and part-time opportunities.
              Let’s discuss your project or collaboration ideas.
            </p>

            <div style={infoItem}>
              <FaEnvelope /> <span>rakeshkumarwebdeve@gmail.com</span>
            </div>
            <div style={infoItem}>
              <FaMapMarkerAlt /> <span>Chennai, Tamil Nadu</span>
            </div>
            <div style={infoItem}>
              <FaPhoneAlt /> <span>9025666509</span>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Rakeshkumar972004"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rakeshkumar-elumalai-721959341"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/919025666509"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* RIGHT BOX */}
          <motion.form className="contact-box" style={formBox}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}

          >
            <h2>Send a Message</h2>

            <input type="text" placeholder="Your Name" required style={inputStyle} />
            <input type="email" placeholder="Your Email" required style={inputStyle} />
            <input type="text" placeholder="Subject" required style={inputStyle} />
            <textarea placeholder="Message" rows="5" required style={inputStyle} />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={buttonStyle}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#0b0b0b",
          borderTop: "1px solid #222",
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        © 2025 Rakeshkumar. All rights reserved.
      </footer>
    </div>
  );
}

/* ---------- STYLES ---------- */


const infoBox = {
  background: "#1a1a1a",
  borderRadius: "20px",
  padding: "40px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
};

const formBox = {
  background: "#1a1a1a",
  borderRadius: "20px",
  padding: "40px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
};

const infoItem = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "15px",
  fontSize: "15px",
};

const socialBox = {
  display: "flex",
  gap: "20px",
  marginTop: "30px",
  fontSize: "26px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  background: "#2a2a2a",
  color: "#fff",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "30px",
  border: "none",
  background: "linear-gradient(135deg, #ff9800, #ff5722)",
  color: "#000",
  fontWeight: "600",
  cursor: "pointer",
};
