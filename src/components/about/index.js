import React from 'react'
import AboutImg from "../../assets/sakshi_blazor.png";
import './about.scss'
const About = () => {
  return (
    <div id="about-section">
      <div className="about-img">
        <img src={AboutImg} alt="" />
      </div>
      <div className="about-content">
        <div className="section-header">
          <h1>About Me</h1>
        </div>
        <div className="about-info">
          <p>I am seeking a challenging position in a reputed organization that values innovation, growth, and professional development. I am ready to bring my enthusiasm, dedication, and expertise to contribute to the organization's success while furthering my own career goals.</p>
          <div className="contact-details">
            <div className="contact-details-item">
              <span class="material-symbols-outlined">
                mail
              </span>
              <a href='mailto:sakshiparkhe56@gmail.com'>sakshiparkhe56@gmail.com</a>
            </div>
            <div className="contact-details-item">
              <span class="material-symbols-outlined">
                phone
              </span>
              <a href='tel:+919370310277'>9370310277</a>
            </div>
            <div className="contact-details-item">
              <span class="material-symbols-outlined">
                location_on
              </span>
              <a>Nashik, Maharashtra, India</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About