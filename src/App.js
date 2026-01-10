import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      anchors={["hero", "about", "education", "projects", "skills", "contact"]}
      navigation
      navigationTooltips={[
        "Hero",
        "About",
        "Education",
        "Projects",
        "Skills",
        "Contact",
      ]}
      sectionsColor={["#0e0e0e", "#111", "#111", "#222", "#111", "#0e0e0e"]}
      render={({ fullpageApi }) => (
        <>
          <Navbar fullpageApi={fullpageApi} />

          <ReactFullpage.Wrapper>
            <div className="section"><Hero /></div>
            <div className="section"><About /></div>
            <div className="section"><Education /></div>
            <div className="section"><Projects /></div>
            <div className="section"><Skills /></div>
            <div className="section"><Contact /></div>
          </ReactFullpage.Wrapper>
        </>
      )}
    />
  );
}

export default App;
