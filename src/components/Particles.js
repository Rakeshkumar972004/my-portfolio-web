import Particles from "react-tsparticles";

<Particles
  options={{
    background: { color: "#0e0e0e" },
    fpsLimit: 60,
    particles: {
      color: { value: "#ffffff" },
      number: { value: 50, density: { enable: true, area: 800 } },
      size: { value: 3 },
      move: { enable: true, speed: 2, outMode: "bounce" },
      line_linked: { enable: true, distance: 150, color: "#fff", opacity: 0.4, width: 1 }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
    }
  }}
/>