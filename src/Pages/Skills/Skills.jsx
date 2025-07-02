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
import RotatingText from "../../Components/RotatingText/RotatingText";
import AnimatedContent from "../../Components/AnimatedContent/AnimatedContent";

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
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <button className="back" onClick={() => navigate("/")}>
            <HiArrowLeft />
          </button>
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
          <AnimatedContent
            className="skills-card"
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={2}
          >
            {skills.map((skill, index) => (
              <SkillCard id={index} icon={skill.icon} title={skill.title} />
            ))}
          </AnimatedContent>
        </div>
      </section>
  );
};

export default Skills;
