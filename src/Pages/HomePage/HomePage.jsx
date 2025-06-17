import React from "react";
import "./HomePage.css";
import HomePageCharacter from "../../assets/HomePageCharacter.png";
import UserCharacter from "../../assets/UserCharacter.png";
import Harsh_CV from "../../../public/Harsh_CV.pdf";

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <img src={UserCharacter} alt="HomePage Character" />
      </div>
      <div className="hero-right">
        <h3>React.js Developer</h3>
        <h1>
          Hi, I'm <span className="username">Harsh Chauhan</span>
        </h1>
        <p>
          A passionate React.js Developer with a keen eye for clean code,
          intuitive design, and seamless user experiences.
        </p>
        <div className="toggles">
          <a href={Harsh_CV} download>
          <button className="resume">
            DOWNLOAD CV <i className="fas fa-download"></i>
          </button>
          </a>
          <a href="https://www.linkedin.com/in/harshchauhan-webdev/" target="_blank">
          <button className="socials">
            <i class="fab fa-linkedin"></i>
          </button>
          </a>
          <a href="https://github.com/thisistoomuchHarsh" target="_blank">
          <button className="socials">
            <i class="fab fa-github"></i>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
