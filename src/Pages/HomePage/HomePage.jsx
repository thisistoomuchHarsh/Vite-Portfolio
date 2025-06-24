import "./HomePage.css";
import Harsh_CV from "../../../public/Harsh_CV.pdf";
import UserCharacter from "../../assets/HomePageCharacter.png";

const HomePage = () => {

  return (
    <section id="home" className="hero-section">
        <div className="hero-content">
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
              <a
                href="https://www.linkedin.com/in/harshchauhan-webdev/"
                target="_blank"
              >
                <button className="socials">
                  <i className="fab fa-linkedin"></i>
                </button>
              </a>
              <a href="https://github.com/thisistoomuchHarsh" target="_blank">
                <button className="socials">
                  <i className="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HomePage;
