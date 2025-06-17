import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import BottomNavbar from "./Components/BottomNavbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutMe/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <BottomNavbar />
      </Router>
    </>
  );
}

export default App;
