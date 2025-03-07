import React, { useState } from "react";
import profileImage from "../assets/images/meeee.jpeg";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => setMenuOpen(false)}>Home</li>
            <li onClick={() => setMenuOpen(false)}>About</li>
            <li onClick={() => setMenuOpen(false)}>Skills</li>
            <li onClick={() => setMenuOpen(false)}>Projects</li>
          </ul>
        </nav>
        <button className="chat-btn">Let's Chat</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="welcome">WELCOME TO MY WORLD</p>
            <h1 className="name">I'm Manav Amrutiya</h1>
            <h2>
              <span className="highlight">Frontend</span> Developer
            </h2>
            <p className="description">
              Transforming ideas into interactive digital experiences with a
              blend of creativity and precision.
            </p>
            <div className="buttons">
              <button className="hire-btn">Hire Me</button>
              <button className="cv-btn">
                <a
                  href="https://drive.google.com/file/d/1RHn7x1bAxBiUPxmolqtZKxKDCnnQAGik/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </button>
            </div>
            <div className="social-icons">
              <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="https://www.linkedin.com/in/manav-amrutiya-aa997a2b6/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Patel-love" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.instagram.com/love_amrutiya_/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
