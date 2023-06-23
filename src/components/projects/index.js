import React from "react";
import "./projects.scss";
import { projectData } from "./projectData";
const Projects = () => {
  return (
    <div id="projects-section">
      <div className="section-header">
        <h1>Projects</h1>
      </div>
      <div className="projects-content">
        {projectData.map((item) => (
          <div
            className="projects-item-card"
            style={{ "--color-id": item.id }}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="card-top"></div>
            <a href={item.link} className="project-logo">
              <img src={item.image} alt="" />
            </a>
            <div className="card-bottom">
              <div className="project-title">{item.title}</div>
            </div>
            <div className="project-desc">
              <ul>
                {item.description.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
