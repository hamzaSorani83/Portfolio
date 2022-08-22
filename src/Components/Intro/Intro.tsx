import React from "react";
import './Intro.css';

import FloatingDiv from "../FloatingDiv/FloatingDiv";

import Vector1 from '../../img/Vector1.webp'
import Vector2 from '../../img/Vector2.webp'
import Boy from '../../img/boy-removebg-preview (2).png'
import Thumbup from '../../img/thumbup.webp'
import Crown from '../../img/crown.webp'
import Glassesimoji from '../../img/glassesimoji.webp'

import Facebook from '@iconscout/react-unicons/icons/uil-facebook-f'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

import { motion } from "framer-motion"


const Intro: React.FC = () => {
  const transition = { duration: 1, type: 'spring' };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am </span>
          <span>Hamza Sorani</span>
          <span>Frontend Developer with high level of experience in web development. producting the Quality work</span>
        </div>
        <a href="https://t.me/hamzaSo83" rel="noreferrer" target="_blank">
          <button className="button i-button">Hire me</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/hamzaSorani83" rel="noreferrer" target="_blank">
            <Github color="#fca61f" size={"5rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009170149170" rel="noreferrer" target="_blank">
            <Facebook color="#fca61f" size={"5rem"}  />
          </a>
          <a href="http://www.linkedin.com/in/HamzaSorani83" rel="noreferrer" target="_blank">
            <Linkedin color="#fca61f" size={"5rem"}  />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" loading="lazy"/>
        <img src={Vector2} alt="Vector2" loading="lazy" />
        <img src={Boy} alt="Boy"  />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: "-24%"}}
          transition={transition}
          src={Glassesimoji} alt="Glassesimoji"
          className="floating-div"
          width="255px"
          height="230px"
          loading="lazy"
        />
        <motion.div
          initial={{ top: '17%', left: '60%' }}
          whileInView={{ left: '50%'}}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={Crown} text1="Web" text2="Development"  />
        </motion.div>
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: "0rem"}}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={Thumbup} text1="Best Design" text2="Award"  />
        </motion.div>
        <div className="blur" style={{ backgroundColor: "rgb(238 210 255)" }}></div>
        <div className="blur" style={{ backgroundColor: "#c1f5ff", top: "17rem", width: "21rem", height: '11rem', left: '-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro;