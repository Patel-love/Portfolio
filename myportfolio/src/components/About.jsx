import React from "react";
import "../assets/css/about.css";
import me from "../assets/images/me.jpeg";

function About() {
  return (
    <section className="about" >
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={me} alt="Developer" />
        </div>
        <div className="about-content">
          <p className="about-subtitle">
            Frontend developer creating responsive, user-focused web
            applications.
          </p>
          <h1 className="about-heading">
            Designing meaningful experiences through creativity and innovation.
          </h1>
          <div className="education-section">
           <u> <h3> <i>My Education</i></h3></u> 
            <div className="education-container">
              <div className="education-item">
                <span className="year">2024</span>
                <div className="education-detail">
                  <h4>Full-Stack Development</h4>
                  <p>Red & White Multimedia Education, Ahmedabad</p>
                </div>
              </div>
              <div className="education-item">
                <span className="year">2023</span>
                <div className="education-detail">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <p>Uttaranchal University, Rajkot</p>
                </div>
              </div>
              <div className="education-item">
                <span className="year">2020</span>
                <div className="education-detail">
                  <h4>12th Higher Secondary Certificate (H.S.C)</h4>
                  <p>Ramkabir High School, Surat</p>
                </div>
              </div>
              <div className="education-item">
                <span className="year">2018</span>
                <div className="education-detail">
                  <h4>10th Secondary School Certificate (SSC)</h4>
                  <p>Ramkabir High School, Surat</p>

                </div>
              </div>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1RHn7x1bAxBiUPxmolqtZKxKDCnnQAGik/view?usp=sharing" target="_blank" download className="resume-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
