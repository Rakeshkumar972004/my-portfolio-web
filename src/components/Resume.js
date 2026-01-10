import React from "react";
import "./Resume.css"

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      {/* Header */}
      <h1>RAKESH KUMAR E</h1>
      <p>
        Full Stack Developer <br />
        📧 rakeshkumarwebdeve@gmail.com | 📞 6383398382 <br />
        📍 Chennai, India
      </p>

      <p>
        🔗{" "}
        <a
          href="https://www.linkedin.com/in/rakeshkumar-elumalai-721959341"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Rakeshkumar9724"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>

      <hr />

      {/* Summary */}
      <h2>Professional Summary</h2>
      <p>
        Full Stack Developer skilled in HTML, CSS, JavaScript, and React.js
        for building responsive and interactive user interfaces. Experienced
        in Node.js and Express.js for backend development, MongoDB for database
        management, and GitHub for version control.
      </p>

      {/* Education */}
      <h2>Education</h2>
      <ul>
        <li>
          <strong>M.Sc Computer Science</strong> (07/2024 – Present) <br />
          King Nandhivarman College of Arts and Science
        </li>
        <li>
          <strong>B.Sc Computer Science</strong> (07/2021 – 05/2024) <br />
          King Nandhivarman College of Arts and Science
        </li>
        <li>
          <strong>Higher Secondary Education</strong> (07/2019 – 04/2021) <br />
          Govt. Boys Hr. Sec. School, Tamil Nadu
        </li>
      </ul>

      {/* Projects */}
      <h2>Projects</h2>

      <h4>Fruit & Vegetable Ecommerce Website</h4>
      <ul>
        <li>User-friendly UI with fresh produce listings</li>
        <li>Add to cart and checkout functionality</li>
        <li>Responsive for mobile & desktop</li>
      </ul>

      <h4>Hospital Management System</h4>
      <ul>
        <li>Doctor–patient appointment booking system</li>
        <li>Built with React and REST APIs</li>
      </ul>

      <h4>Recipe Finder Website</h4>
      <ul>
        <li>Search recipes by ingredients</li>
        <li>Step-by-step cooking instructions</li>
      </ul>

      {/* Skills */}
      <h2>Skills</h2>
      <p>
        <strong>Frontend:</strong> HTML, CSS, JavaScript, React <br />
        <strong>Backend:</strong> Node.js, Express.js <br />
        <strong>Database:</strong> MongoDB <br />
        <strong>Tools:</strong> GitHub, VS Code
      </p>

      {/* Certificates */}
      <h2>Certificates</h2>
      <ul>
        <li>Full Stack Developer (2024)</li>
        <li>Full Stack PHP (2025)</li>
        <li>Python for Data Science (2025)</li>
      </ul>

      {/* Languages */}
      <h2>Languages</h2>
      <p>
        English – Professional <br />
        Tamil – Native
      </p>
    </div>
  );
}
