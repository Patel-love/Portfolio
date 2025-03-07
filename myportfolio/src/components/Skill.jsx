
// const skills = [
//   { image: "/images/html-5.png", name: "HTML5" },
//   { image: "/images/css-3.png", name: "CSS3" },
//   { image: "/images/socia.png", name: "jQuery" },
//   { image: "/images/bootstrap.png", name: "Bootstrap" },
//   { image: "/images/js.png", name: "JavaScript" },
//   { image: "/images/physics.png", name: "React.js" },
//   { image: "/images/Reduxe.png", name: "Redux" },
//   { image: "/images/Tailwind_CSS.png", name: "Tailwind CSS" },
//   { image: "/images/github.png", name: "Git & GitHub" },
// ];
// const skills = [
//   { image: "../assets/images/html-5.png", name: "HTML5" },
//   { image: "../assets/images/css-3.png", name: "CSS3" },
//   { image: "../assets/images/socia.png", name: "jQuery" },
//   { image: "../assets/images/bootstrap.png", name: "Bootstrap" },
//   { image: "../assets/images/js.png", name: "JavaScript" },
//   { image: "../assets/images/physics.png", name: "React.js" },
//   { image: "../assets/images/Reduxe.png", name: "Redux" },
//   { image: "../assets/images/Tailwind_CSS.png", name: "Tailwind CSS" },
//   { image: "../assets/images/github.png", name: "Git & GitHub" },
// ];


import React from "react";
import htmlIcon from "../assets/images/html-5.png";
import cssIcon from "../assets/images/css-3.png";
import jqueryIcon from "../assets/images/social.png";
import bootstrapIcon from "../assets/images/bootstrap.png";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/physics.png";
import reduxIcon from "../assets/images/Redux.png";
import tailwindIcon from "../assets/images/Tailwind_CSS.png";
import githubIcon from "../assets/images/github.png";
import "../assets/css/skill.css";

const skills = [
  { image: htmlIcon, name: "HTML5" },
  { image: cssIcon, name: "CSS3" },
  { image: jqueryIcon, name: "jQuery" },
  { image: bootstrapIcon, name: "Bootstrap" },
  { image: jsIcon, name: "JavaScript" },
  { image: reactIcon, name: "React.js" },
  { image: reduxIcon, name: "Redux" },
  { image: tailwindIcon, name: "Tailwind CSS" },
  { image: githubIcon, name: "Git & GitHub" },
];

function Skill() {
  return (
    <section className="skills">
      <h2 className="skills-title">Technical Skills</h2>
      <p className="skills-subtitle">
        PROFICIENT IN MODERN WEB TECHNOLOGIES, FRAMEWORKS, AND TOOLS
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <span className="skill-name">{skill.name}</span> {/* ✅ Fix Here */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill