import React from "react";
import think from "../assets/images/think.gif";
import "../assets/css/contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-box">
        <div className="contact-text">
          <p className="subtitle">Get In Touch</p>
          <h2 className="main-title">Have a Project On Your Mind?</h2>
          <button className="contact-btn">Contact Me</button>
        </div>

        <div className="contact-image">
          <img src={think} alt="Contact Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
