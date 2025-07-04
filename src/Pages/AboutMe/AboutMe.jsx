import "./AboutMe.css";
import React, { useState } from "react";
import aboutImage from "../../assets/Harsh.jpg";
import educationImage from "../../assets/books.jpg"
import experienceImage from "../../assets/VectorImage.jpg"
import ScrollHashUpdater from "../../Components/ScrollHashUpdater/ScrollHashUpdater";

const AboutMe = () => {
  const [activeheading, setActiveheading] = useState("about");
  ScrollHashUpdater();


  const headings = [
    { id: "about", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
  ];

  const images = {
    about: aboutImage,
    education: educationImage,
    experience: experienceImage,
  };

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
    <section id="about" data-bg="light" className="about-section">
      <div className="about-container">
        <div className="about-left">
          {headings.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveheading(item.id);
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
          <div className="about-info">
            {content[activeheading]}
          </div>

          <div className="about-image">
          <img src={images[activeheading]} alt={activeheading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
