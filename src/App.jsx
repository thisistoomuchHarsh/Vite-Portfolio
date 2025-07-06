import { useState } from "react";

import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";

import Skills from "./Pages/Skills/Skills";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import HeroSection from "./Pages/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(() => {
    return sessionStorage.getItem("welcomeCompleted") !== "true";
  });

  const handleExplore = () => {
    sessionStorage.setItem("welcomeCompleted", "true");
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onExplore={handleExplore} />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
