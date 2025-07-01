import React from "react";
import "./Skills.css";
import cssIcon from "../../assets/css.svg";
import htmlIcon from "../../assets/html.svg";
import nodeIcon from "../../assets/node.svg";
import reactIcon from "../../assets/react.svg";
import githubIcon from "../../assets/github.svg";
import jsIcon from "../../assets/javascript.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import bootstrapIcon from "../../assets/bootstrap.svg";

import SkillCard from "../../Components/SkillCard/SkillCard";
import FadeSection from "../../Components/FadeSection/FadeSection";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  
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
    <FadeSection>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <button className="back" onClick={() => navigate("/")}>
            <HiArrowLeft />
          </button>
          <div className="skills-heading">
            <h2>My Tech Stack</h2>
          </div>
          <div className="skills-card">
            {skills.map((skill, index) => (
              <SkillCard id={index} icon={skill.icon} title={skill.title} />
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default Skills;
