import React from "react";
import { educationData } from "./educationData";
import "./education.scss";
const Education = () => {
  return (
    <div id="education-section">
      <div className="section-header">
        <h1>Education</h1>
      </div>
      <div className="education-content">
        {educationData.map((item) => (
          <div
            className="education-item-card"
            style={{ "--color-id": item.id }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="institute-img">
              <img src={item.institute_img} alt="" />
            </div>
            <div className="result">
              <p>{item.result}</p>
            </div>
            <div className="academic-year">
              {item.start_year}-{item.end_year}
            </div>
            <div className="education">{item.title}</div>
            <div className="institute">{item.institute}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
