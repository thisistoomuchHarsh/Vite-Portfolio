// import { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

// import PageWrapper from "./Components/PageWrapper/PageWrapper";
// import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";

// import Skills from "./Pages/Skills/Skills";
// import AboutMe from "./Pages/AboutMe/AboutMe";
// import Contact from "./Pages/Contact/Contact";
// import Projects from "./Pages/Projects/Projects";
// import HeroSection from "./Pages/HeroSection/HeroSection";

// const AppRoutes = () => {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route
//           path="/"
//           element={
//             <PageWrapper>
//               <HeroSection />
//             </PageWrapper>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <PageWrapper>
//               <AboutMe />
//             </PageWrapper>
//           }
//         />
//         <Route
//           path="/projects"
//           element={
//             <PageWrapper>
//               <Projects />
//             </PageWrapper>
//           }
//         />
//         <Route
//           path="/skills"
//           element={
//             <PageWrapper>
//               <Skills />
//             </PageWrapper>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <PageWrapper>
//               <Contact />
//             </PageWrapper>
//           }
//         />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// const App = () => {
//   const [showWelcome, setShowWelcome] = useState(() => {
//     return sessionStorage.getItem("welcomeCompleted") !== "true";
//   });

//   const handleExplore = () => {
//     sessionStorage.setItem("welcomeCompleted", "true");
//     setShowWelcome(false);
//   };

//   useEffect(() => {
//     // Prevent browser from restoring scroll position on back
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }
//   }, []);

//   return (
//     <Router>
//       {showWelcome ? (
//         <WelcomeScreen onExplore={handleExplore} />
//       ) : (
//         <AppRoutes />
//       )}
//     </Router>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";

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

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <Router>
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
    </Router>
  );
};

export default App;
