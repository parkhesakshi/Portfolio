import React from "react";
import "./header.scss";
import Heroin from "../../assets/Sakshi.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import Resume from "../../assets/sakshi_parkhe.pdf";
const Header = () => {
  const [text] = useTypewriter({
    words: ["Enthusiastic Developer", "Passionate Designer"],
    loop: 0,
  });
  return (
    <div id="header-section">
      <div className="header-eclipse"></div>
      <div className="header-content">
        <div
          className="header-left"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h3>Hello, I'm</h3>
          <h1>
            <span>Sakshi Parkhe</span>
          </h1>
          <h2>
            {text} <Cursor cursorColor="#00000" />
          </h2>
          <a href={Resume} target="_blank" className="cv_btn">
            Download CV
          </a>
        </div>
        <div className="header-right">
          <div className="header-right-img">
            <img
              src={`https://res.cloudinary.com/abhisonar0130/image/upload/v1687556788/Sakshi/portfolio/assets/Sakshi_ks5wpq.webp`}
              alt=""
              height={300}
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
