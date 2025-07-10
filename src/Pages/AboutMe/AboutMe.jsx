import "./AboutMe.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/Harsh.jpg";
import educationImage from "../../assets/books.jpg";
import experienceImage from "../../assets/VectorImage.jpg";
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
          I am a fresher, and I have honed my skills in Frontend Development
          through academic projects, personal initiatives, and consistent
          self-learning. My focus has been on building dynamic and efficient web
          applications using modern technologies like React, JavaScript, and
          responsive design principles. With a solid programming foundation and
          a keen eye for detail, I am excited to bring my skills to a
          professional setting. I enjoy solving real-world problems through code
          and strive to create clean, user-centric digital experiences. In
          addition to technical skills, I value teamwork, communication, and a
          growth mindset. I believe in continuous improvement and love exploring
          new tools and trends in the frontend ecosystem. I am actively seeking
          opportunities to join a forward-thinking company where I can grow as a
          developer, contribute to impactful projects, and collaborate with
          passionate teams.
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
          using modern tools and frameworks. During my academic journey, I
          consistently challenged myself by exploring new skills beyond the
          classroom. I actively participated in tech workshops, online coding
          challenges, and collaborative projects that deepened my understanding
          of frontend technologies. This blend of academic knowledge and
          practical exposure has helped me become a well-rounded developer.
          Education has been the foundation of my growth—shaping both my
          technical expertise and professional mindset.
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
          contribute to impactful projects, and grow with a dynamic team. I have
          hands-on experience with modern frontend technologies like React,
          JavaScript, and responsive design frameworks. I also enjoy
          collaborating with designers and backend developers to bring seamless
          digital experiences to life. Every line of code I write is driven by a
          strong sense of purpose—to make the web a more accessible and engaging
          place for users everywhere.
        </p>
      </div>
    ),
  };
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
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
          <div className="about-info">{content[activeheading]}</div>

          <div className="about-image">
            <img src={images[activeheading]} alt={activeheading} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
