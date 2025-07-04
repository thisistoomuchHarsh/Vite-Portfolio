import React from "react";
import "./HeroSection.css";
import HeroImage from "../../assets/VectorImage.jpg";

import Harsh_CV from "../../../public/Harsh_CV.pdf";
import RotatingText from "../../Components/RotatingText/RotatingText";
import { motion } from "framer-motion";
import ScrollHashUpdater from "../../Components/ScrollHashUpdater/ScrollHashUpdater";


const HeroSection = () => {

  ScrollHashUpdater();

  return (
    <section id="home" data-bg="dark" className="hero-section">
      <div className="hero">
        <div className="hero-left">
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
        </div>
        <motion.div className="hero-right">
          <img src={HeroImage} alt="HomePage Character" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
