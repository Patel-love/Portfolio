import React from "react";
import "../assets/css/project.css";
import herb from "../assets/images/herb.png";
import shark from "../assets/images/shark.png";
import energy from "../assets/images/energy.png";
import solution from "../assets/images/solution.png";

const projects = [
  {
    title: "HerbCraft",
    description: "An e-commerce website with product filtering, cart system, and a smooth checkout process.",
    tags: ["Html", "CSS", "Bootstrap", "MediaQuery"],
    codeLink: "https://github.com/Patel-love/Herb",
    liveDemo: "#",
    image: herb,  
  },
  {
    title: "SharkMedia",
    description: "A digital media management app that helps users organize and schedule content effortlessly.",
    tags: ["React", "Firebase", "CSS", "Authentication"],
    codeLink: "https://github.com/Patel-love/SharkMedia/tree/main/sharkmediaservices",
    liveDemo: "#",
    image: shark,
  },
  {
    title: "Energy Freedom",
    description: "A renewable energy website showcasing solar solutions, services, and pricing.",
    tags: ["Html", "CSS", "Bootstrap", "MediaQuery"],
    codeLink: "https://github.com/Patel-love/energy-website",
    liveDemo: "#",
    image: energy,
  },
  {
    title: "Transport & Logistics",
    description: "A logistics management platform for tracking shipments and optimizing delivery routes.",
    tags: ["React", "CSS", "JavaScript"],
    codeLink: "https://github.com/Patel-love/React-Projects/tree/main/Practical",
    liveDemo: "#",
    image: solution,
  },
];


const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">Check out some of my recent work</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card small-card" key={index}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {/* ✅ Code & Live Demo Links */}
              <div className="project-links">
            
                <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  Explore More
                </a>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects ;
