import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import ScrollHashUpdater from "../../Components/ScrollHashUpdater/ScrollHashUpdater";


const projectsData = [
  {
    title: "Project One",
    description: "A brief description of the project and what it achieves.",
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "An overview of the second project with its features.",
    link: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description: "Details about the third project and its purpose.",
    link: "https://github.com/yourusername/project-three",
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
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => window.open(project.link, "_blank")}>
              View Project
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
