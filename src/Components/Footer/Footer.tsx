import React from "react";
import "./Footer.css";

import Wave from "../../img/wave.webp";

import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook-f";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <img src={Wave} width="100%" height="auto" loading="lazy" alt="" />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://github.com/hamzaSorani83" rel="noreferrer" target="_blank">
            <Github color="#fff" size={"5rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009170149170" rel="noreferrer" target="_blank">
            <Facebook color="#fff" size={"5rem"}  />
          </a>
          <a href="http://www.linkedin.com/in/HamzaSorani83" rel="noreferrer" target="_blank">
            <Linkedin color="#fff" size={"5rem"}  />
          </a>
        </div>
        <div className="f-links">
          <span>hamzasorani83@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;