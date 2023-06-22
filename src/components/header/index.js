import React from 'react'
import './header.scss';
import Heroin from "../../assets/Sakshi.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import Resume from "../../assets/sakshi_parkhe.pdf"
const Header = () => {
  const [text] = useTypewriter({
    words: ["Enthusiastic Developer", "Passionate Designer"],
    loop: 0,
  });
  return (
    <div id="header-section">
      <div className="header-eclipse">
      </div>
      <div className="header-content">
        <div className="header-left" data-aos="fade-left"
          data-aos-duration="2000">
          <h1>Hello, I'm <span>Sakshi</span></h1>
          <h2>{text} <Cursor cursorColor="#ffff" /></h2>
          <a href={Resume} target='_blank' className="cv_btn">
            Download CV
          </a>
        </div>
        <div className="header-right">
          <img src={Heroin} alt="" height={300} data-aos="fade-right"
            data-aos-duration="2000" />
        </div>
      </div>
    </div>
  )
}

export default Header