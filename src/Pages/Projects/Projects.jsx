import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import ScrollHashUpdater from "../../Components/ScrollHashUpdater/ScrollHashUpdater";
import QuickCart from "../../assets/QuickCart.png";
import TwinsAI from "../../assets/TwinsAI.png";
import Portfolio from "../../assets/Portfolio.png";


const projectsData = [
  {
    image: Portfolio,
    title: "Portfolio",
    description: "A fully responsive portfolio site built with React.js to showcase my projects, skills, and experience. Designed with a clean and modern UI, smooth scroll navigation, and section-based layout. Emphasized performance, accessibility, and clear visual hierarchy to ensure an engaging user experience across devices.",
    link: "http://vite-portfolio-psi.vercel.app/",
  },
  {
    image: QuickCart,
    title: "QuickCart",
    description: "A sleek and responsive e-commerce website built with React.js and Tailwind CSS. Features secure API integrations for product browsing, cart management, and user authentication. Designed for a seamless and intuitive shopping experience with modern UI and smooth navigation.",
    link: "https://quick-cart-three.vercel.app/",
  },
  {
    image: TwinsAI,
    title: "TwinsAI",
    description: "A responsive and accessible chatbot interface inspired by Google's Gemini, built with React.js. It integrates real-time API communication to deliver instant replies while maintaining a clean, minimalistic user experience. Designed with performance and usability in mind.",
    link: "https://twins-ai.vercel.app/",
  },
];

const Projects = () => {
  ScrollHashUpdater();


  return (
    <motion.section id="projects"  className="projects-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <img src={project.image} alt="Project Image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
