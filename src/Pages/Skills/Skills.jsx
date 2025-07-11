import "./Skills.css";
import React from "react";
import { motion } from "framer-motion";
import cssIcon from "../../assets/css.svg";
import htmlIcon from "../../assets/html.svg";
import nodeIcon from "../../assets/node.svg";
import reactIcon from "../../assets/react.svg";
import jsIcon from "../../assets/javascript.svg";
import githubIcon from "../../assets/github.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import bootstrapIcon from "../../assets/bootstrap.svg";

import SkillCard from "../../Components/SkillCard/SkillCard";
import RotatingText from "../../Components/RotatingText/RotatingText";
import ScrollHashUpdater from "../../Components/ScrollHashUpdater/ScrollHashUpdater";

const Skills = () => {
  ScrollHashUpdater();

  const skills = [
    { icon: htmlIcon, title: "HTML" },
    { icon: cssIcon, title: "CSS" },
    { icon: jsIcon, title: "JavaScript" },
    { icon: reactIcon, title: "React" },
    { icon: tailwindIcon, title: "Tailwind CSS" },
    { icon: nodeIcon, title: "Node JS" },
    { icon: bootstrapIcon, title: "Bootstrap" },
    { icon: githubIcon, title: "Github" },
  ];
  return (
    <motion.section id="skills" className="skills-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}>
      <div className="skills-container">
        <div className="skills-heading">
          <h2>
            <span>My </span>
            <RotatingText
              texts={["Skills", "Tech Stack"]}
              mainClassName="rotating-text-wrapper"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
