import React from "react";
import "./Works.css"

import Upwork from '../../img/Upwork.webp';
import Amazon from '../../img/amazon.webp';
import Shopify from '../../img/Shopify.webp';
import Fiverr from '../../img/fiverr.webp';
import Facebook from '../../img/Facebook.webp';

import {motion} from 'framer-motion'

const Experience: React.FC = () => {
  return (
    <div className="works" id='experience'>
      <div className="w-left">
        <div className="awesome">
          <span>Works for All these</span>
          <span>Brands 	&#38; Clients</span>
          <span>
            I Can Build An Interactive Web Sites ,Web Pages, and Web Apps
            <br />
            With React Or Modern JS
            <br />
            <br />
            I Have 1 Year Experience in Modern JS And React,
            <br />
            And 1.5 Year In HTML ,CSS, Vanilla JS, Bootstrap, And SCSS
          </span>
          <a href="https://t.me/hamzaSo83" rel="noreferrer" target="_blank">
            <button className="button w-button">Hire me</button>
          </a>
          <div className="blur w-blur" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" loading="lazy" width="111px" height="111px" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" loading="lazy" width="111px" height="111px" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" loading="lazy" width="111px" height="111px" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" loading="lazy" width="111px" height="111px" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" loading="lazy" width="111px" height="111px" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Experience;