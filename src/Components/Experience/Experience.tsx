import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <div className="blur e-blur"></div>
      <div className="achievement">
        <div className="circle">1+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">10+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">1+</div>
        <span>companies</span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience;