import React from "react";
import "./Contact.css";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import locationIcon from "../../assets/address.svg";
import RotatingText from "../../Components/RotatingText/RotatingText";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import AnimatedContent from "../../Components/AnimatedContent/AnimatedContent";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-page">
      <div className="contact-container">
        <button className="back" onClick={() => navigate("/")}>
          <HiArrowLeft />
        </button>
        <h2 className="contact-heading">
          <RotatingText
            texts={["Contact", "Reach"]}
            mainClassName="rotating-text-wrapper"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <span> Me</span>
        </h2>

        <div className="contact-section">
          {/* Left Form */}
          <AnimatedContent
            className="contact-left"
            direction="horizontal"
            reverse
            distance={150}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={1}
          >
            <div className="contact-left-container">
              <h3>Let's Work Together</h3>
              <p>Reach out to me for collaborations or inquiries.</p>
              <form className="contact-form">
                <div className="input-row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="input-row">
                  <input type="email" placeholder="Email" />
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <textarea placeholder="Type your message here" rows="5" />
                <button type="submit">Send Message</button>
              </form>
            </div>
          </AnimatedContent>

          {/* Right Info */}
          <AnimatedContent
            className="contact-right"
            direction="horizontal"
            distance={150}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={1}
          >
            <div className="contacts">
              <div className="contact-logo"><img src={phoneIcon} alt="Phone" /></div>
              <div className="contact-details">
                <p>Phone</p>
                <p>7703949916</p>
              </div>
            </div>
            <div className="contacts">
              <div className="contact-logo"><img src={emailIcon} alt="Email" /></div>
              <div className="contact-details">
                <p>Email</p>
                <p>chauhanharsh388@gmail.com</p>
              </div>
            </div>
            <div className="contacts">
              <div className="contact-logo"><img src={locationIcon} alt="Location" /></div>
              <div className="contact-details">
                <p>Address</p>
                <p>Delhi, India</p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default Contact;
