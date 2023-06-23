import React from "react";
import AboutImg from "../../assets/Sakshi_Blazor.webp";
import "./about.scss";
const About = () => {
  return (
    <div id="about-section">
      <div className="about-flex">
        <div className="about-img" data-aos="zoom-in" data-aos-duration="1500">
          <img
            src={`https://res.cloudinary.com/abhisonar0130/image/upload/v1687556788/Sakshi/portfolio/assets/Sakshi_Blazor_skyqlq.webp`}
            alt=""
          />
        </div>
      </div>
      <div className="about-content">
        <div className="section-header">
          <h1>About Me</h1>
        </div>
        <div className="about-info">
          <p>
            I am seeking a challenging position in a reputed organization that
            values innovation, growth, and professional development. I am ready
            to bring my enthusiasm, dedication, and expertise to contribute to
            the organization's success while furthering my own career goals.
          </p>
          <div className="contact-details">
            <div className="contact-details-item">
              <span class="material-symbols-outlined">mail</span>
              <a href="mailto:sakshiparkhe56@gmail.com">
                sakshiparkhe56@gmail.com
              </a>
            </div>
            <div className="contact-details-item">
              <span class="material-symbols-outlined">phone</span>
              <a href="tel:+919370310277" target="_blank">
                9370310277
              </a>
            </div>
            <div className="contact-details-item">
              <span class="material-symbols-outlined">location_on</span>
              <a target="_blank">Nashik, Maharashtra, India</a>
            </div>
            <div className="contact-details-item">
              <i class="fa-brands fa-linkedin-in"></i>
              <a
                href="https://www.linkedin.com/in/sakshiparkhe/"
                target="_blank"
              >
                sakshiparkhe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
