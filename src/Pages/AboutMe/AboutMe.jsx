import "./AboutMe.css";
import React, { useState } from "react";





const AboutMe = () => {
  const [activeheading, setActiveheading] = useState("experience");

  const headings = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "about", label: "About Me" },
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
    <section id="about" className="about-section">
      <div className="about-left">
        {headings.map((item) => (
          <button
            key={item.id}
            onClick={() => {setActiveheading(item.id);
              setIsMenuOpen(false);
            }}
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
    </section>
  );
};

export default AboutMe;
