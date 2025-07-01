import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageWrapper from "./Components/PageWrapper/PageWrapper";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";

import Skills from "./Pages/Skills/Skills";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import HeroSection from "./Pages/HeroSection/HeroSection";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(() => {
    return sessionStorage.getItem("welcomeCompleted") !== "true";
  });

  const handleExplore = () => {
    sessionStorage.setItem("welcomeCompleted", "true");
    setShowWelcome(false);
  };

  return (
    <Router>
      {showWelcome ? (
        <WelcomeScreen onExplore={handleExplore} />
      ) : (
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageWrapper>
      )}
    </Router>
  );
};

export default App;
