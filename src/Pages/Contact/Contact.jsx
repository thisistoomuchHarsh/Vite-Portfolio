import React from "react";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import addressIcon from "../../assets/address.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-left">
        <div className="contact-container">
          <h3>Let's Work Together</h3>
          <p>Reach out to me for collaborations or inquiries.</p>
          <form action="https://formspree.io/f/mblykeak" method="POST" className="contact-form">
            <div className="input-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required/>
            </div>
            <div className="input-row">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Phone Number" required />
            </div>
            <textarea placeholder="Type your message here" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-right">
        <div className="contacts">
          <div className="contact-logo">
            <img src={phoneIcon} alt="Phone Icon" />
          </div>
          <div className="contact-details">
            <p>Phone</p>
            <p>7703949916</p>
          </div>
        </div>
        <div className="contacts">
          <div className="contact-logo">
            <img src={emailIcon} alt="Email Icon" />
          </div>
          <div className="contact-details">
            <p>Email</p>
            <p>chauhanharsh388@gmail.com</p>
          </div>
        </div>
        <div className="contacts">
          <div className="contact-logo">
            <img src={addressIcon} alt="Address Icon" />
          </div>
          <div className="contact-details">
            <p>Address</p>
            <p>Delhi, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
