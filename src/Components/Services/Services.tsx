import React from "react";
import "./Services.css"

import HeartEmoji from '../../img/heartemoji.webp';
import Glasses from '../../img/glasses.webp';
import Humble from '../../img/humble.webp';
import Resume from '../../img/resume.pdf';

import Card from '../Card/Card';

import { motion } from "framer-motion";

const Services: React.FC = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="services">
      <div className="s-left">
        <div className="awesome">
          <span>My Awesome</span>
          <span>services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit voluptatem 
            <br />
            Necessitatibus laborum voluptatem 
          </span>
          <a href={Resume} title="CV" download>
            <button className="button s-button">Download CV</button>
          </a>
          <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      <div className="s-right">
        <div className="cards">
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "10rem" }}
            transition={transition}
          >
            <Card
              emoji= {HeartEmoji}
              heading={'Design'}
              details = {"Lorem ipsum dolor adipisicing elit voluptatem "}
            />
          </motion.div>
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-6rem" }}
            transition={transition}
          >
            <Card
              emoji= {Glasses}
              heading={'Developer'}
              details = {"Html Css Js Ts Sass Bootstrap Tailwing Reactjs Nextjs"}
            />
          </motion.div>
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "11rem" }}
            transition={transition}
          >
            <Card
              emoji= {Humble}
              heading={'UI/UX'}
              details = {"Lorem ipsum dolor sit amet consectetur adipisicing elit voluptatem "}
            />
          </motion.div>
          <div className="blur s-blur2" style={{ background: "--purple" }}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;