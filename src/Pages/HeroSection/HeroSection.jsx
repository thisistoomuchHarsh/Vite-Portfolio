import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../assets/VectorImage.jpg";
import { HiArrowRight } from "react-icons/hi";

import Harsh_CV from "../../../public/Harsh_CV.pdf";
import RotatingText from "../../Components/RotatingText/RotatingText";
import { motion } from "framer-motion";
import AnimatedContent from "../../Components/AnimatedContent/AnimatedContent";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <AnimatedContent
        className="item hero"
        distance={150}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={1}
      >
        <motion.div className="hero-left">
          <h1>
            <RotatingText
              texts={["Frontend", "React.js"]}
              mainClassName="rotating-text-wrapper"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <span> Developer</span>
          </h1>

          <p>
            Creative and detail-oriented Frontend Developer skilled in building
            responsive, user-friendly interfaces using modern web technologies
            like HTML, CSS, JavaScript, and React. Passionate about crafting
            seamless user experiences with clean, maintainable code.
          </p>

          <motion.div
            className="toggles"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.a
              href={Harsh_CV}
              download
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <button className="resume">
                DOWNLOAD CV <i className="fas fa-download"></i>
              </button>
            </motion.a>

            <div className="social-buttons">
              <motion.a
                href="https://www.linkedin.com/in/harshchauhan-webdev/"
                target="_blank"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <button className="socials">
                  <i className="fab fa-linkedin"></i>
                </button>
              </motion.a>

              <motion.a
                href="https://github.com/thisistoomuchHarsh"
                target="_blank"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <button className="socials">
                  <i className="fab fa-github"></i>
                </button>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="hero-right">
          <img src={HeroImage} alt="HomePage Character" />
        </motion.div>
      </AnimatedContent>
      <AnimatedContent
        className="item about"
        distance={150}
        direction="horizontal"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={1}
      >
        <h2>
          Hi, I'm <span className="about-username"> Harsh Chauhan</span>
        </h2>
        <p>
          I transform visions into interactive web realities. I specialize in
          building user-centric interfaces with a keen eye for detail and modern
          standards.{" "}
        </p>
        <button onClick={() => navigate("/about")}>
          <HiArrowRight />
        </button>
      </AnimatedContent>
      <AnimatedContent
        className="item skills"
        distance={150}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={1}
      >
        <h2>
          Explore <span>My Skills</span>
        </h2>
        <p>
          Explore a comprehensive breakdown of my technical proficiencies,
          including frontend languages, frameworks, tools, and methodologies.
        </p>
        <button onClick={() => navigate("/skills")}>
          <HiArrowRight />
        </button>
      </AnimatedContent>
      <AnimatedContent
        className="item projects"
        distance={150}
        direction="horizontal"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={1}
      >
        <h2>
          Projects in <span>Focus</span>
        </h2>
        <p>
          Discover my complete body of work, where every project is crafted with
          attention to detail and a commitment to transforming ideas into
          functional, creative web solutions.
        </p>
        <button onClick={() => navigate("/projects")}>
          <HiArrowRight />
        </button>
      </AnimatedContent>
      <AnimatedContent
        className="item contact"
        distance={150}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={1}
      >
        <h2>
          Reach Out to <span> Me</span>
        </h2>
        <p>
          Always open to new collaborations, job opportunities, and interesting
          conversations in the world of web development. Drop me a line!
        </p>
        <button onClick={() => navigate("/contact")}>
          <HiArrowRight />
        </button>
      </AnimatedContent>
    </div>
  );
};

export default HeroSection;
