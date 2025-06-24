import { AnimatePresence } from "framer-motion";

// import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import Navbar from "./Components/Navbar/Navbar";

import HomePage from "./Pages/HomePage/HomePage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";

function AppContent() {

  return (
    <>
      <Navbar />
          {/* <WelcomeScreen /> */}
      <AnimatePresence>
          <HomePage />
      </AnimatePresence>
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
    </>
  );
}

export default AppContent;
