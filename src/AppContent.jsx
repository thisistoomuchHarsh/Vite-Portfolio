import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import BulbScreen from "./Components/BulbScreen/BulbScreen";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import BottomNavbar from "./Components/BottomNavbar";
import Welcome from "./Components/Welcome";

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/" && location.pathname !== "/bulb";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/bulb" element={<BulbScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showNavbar && <BottomNavbar />}
    </>
  );
}

export default AppContent;
