import React, { useState } from "react";
import htmlIcon from "../../assets/html.svg"
import cssIcon from "../../assets/css.svg"
import jsIcon from "../../assets/javascript.svg"
import reactIcon from "../../assets/react.svg"
import nodeIcon from "../../assets/node.svg"
import bootstrapIcon from "../../assets/bootstrap.svg"
import tailwindIcon from "../../assets/tailwind.svg"
import githubIcon from "../../assets/github.svg"
import SkillCard from "../../Components/SkillCard";
import "./AboutMe.css";
import EducationCard from "../../Components/EducationCard";

const AboutMe = () => {
  const [activeheading, setActiveheading] = useState("experience");

  const headings = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "about", label: "About Me" },
  ];

  const skillIcons = [
    { icon: htmlIcon, title: "HTML5" },
    { icon: cssIcon, title: "CSS3" },
    { icon: jsIcon, title: "JavaScript" },
    { icon: reactIcon, title: "React" },
    { icon: nodeIcon, title: "Node" },
    { icon: bootstrapIcon, title: "Bootstrap" },
    { icon: tailwindIcon, title: "Tailwind" },
    { icon: githubIcon, title: "Github" },
  ];

  const educationCardInfo = [
    {
      duration: "2020 - 2024",
      education: "Bachelor of Commerce",
      institution: "Delhi University",
    },
    {
      duration: "2024 - 2025",
      education: "Frontend Developer Course",
      institution: "Dice Academy",
    },
    
  ];

  const content = {
    experience: (
      <div>
        <p>
          I am a fresher, I have honed my skills in Frontend Development through
          academic projects and personal initiatives. My focus has been on
          building dynamic and efficient web applications using modern
          technologies. With a solid programming foundation and a keen eye for
          detail, I am excited to bring my skills to a professional setting. I
          am actively seeking opportunities to join a forward-thinking company
          where I can grow as a developer and contribute to impactful projects.
        </p>
      </div>
    ),
    skills: (
      <div>
        <p>
          I specialize in crafting engaging and responsive user interfaces with
          a strong focus on performance and usability. My expertise in modern
          front-end technologies enables me to build seamless, interactive web
          experiences that align with both user needs and business goals.
        </p>
        <div className="skills-grid">
          {skillIcons.map((skill, index) => (
            // console.log(skill.title),
            <SkillCard key={index} icon={skill.icon} title={skill.title} />
          ))}
        </div>
        
      </div>
    ),
    education: (
      <div>
        <p>
          I hold a Bachelor of Commerce (B.Com) degree from Delhi University,
          where I developed a strong analytical and problem-solving mindset. To
          pursue my passion for technology and design, I completed a specialized
          Frontend Development course from Dice Academy, where I gained hands-on
          experience in building responsive and user-friendly web interfaces
          using modern tools and frameworks.
        </p>
        <div className="education-grid">
          {educationCardInfo.map((education, index) => (
            <EducationCard
              key={index}
              duration={education.duration}
              education={education.education}
              institution={education.institution}
            />
          ))}
        </div>
      </div>
    ),
    about: (
      <div>
        <p>
          I'm Harsh Chauhan, a passionate Frontend Developer focused on building
          clean, responsive, and user-friendly web experiences. With a
          background in commerce and specialized training from Dice Academy, I
          bring a unique combination of analytical thinking and creative design
          to every project. I'm currently open to freelance opportunities and
          actively seeking a full-time role where I can apply my skills,
          contribute to impactful projects, and grow with a dynamic team.
        </p>
      </div>
    ),
  };
  return (
    <div className="about-section">
      <div className="about-left">
        {headings.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveheading(item.id)}
            className={`menu-button ${
              activeheading === item.id ? "active" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="about-right">
      <h2>{headings.find(h => h.id === activeheading)?.label}</h2>
      {content[activeheading]}
      </div>
    </div>
  );
};

export default AboutMe;
