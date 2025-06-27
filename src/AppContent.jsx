import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import Navbar from "./Components/Navbar/Navbar";

import HomePage from "./Pages/HomePage/HomePage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";
import { useState } from "react";
import PageWrapper from "../src/Components/PageWrapper/PageWrapper";


function AppContent() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome ? (
        // <PageWrapper>
        <WelcomeScreen onExplore={() => setShowWelcome(false)} />
        // </PageWrapper>
      ) : (
        <>
        <PageWrapper>
          <Navbar />
          <HomePage />
          {/* <AboutMe /> */}
          {/* <Skills /> */}
          {/* <Projects /> */}
          {/* <Contact /> */}
        </PageWrapper>
        </>
      )}
    </>
  );
}

export default AppContent;
