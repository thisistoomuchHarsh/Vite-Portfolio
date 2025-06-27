import "./HomePage.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Harsh_CV from "../../../public/Harsh_CV.pdf";
import UserCharacter from "../../assets/Harsh.jpg";
import RotatingText from "../../Components/RotatingText/RotatingText";
import FadeSection from "../../Components/FadeSection/FadeSection";

const HomePage = () => {
  const sectionRef = useRef();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <FadeSection
      id="home"
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      ref={sectionRef}
      style={{ opacity }}
    >
        <motion.div
          className="hero-left"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img src={UserCharacter} alt="HomePage Character" />
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3>
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
          </h3>

          <h1>
            Hi, I'm <span className="username">Harsh Chauhan</span>
          </h1>

          <p>
            A passionate React.js Developer with a keen eye for clean code,
            intuitive design, and seamless user experiences.
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
          </motion.div>
        </motion.div>
    </FadeSection>
  );
};

export default HomePage;
