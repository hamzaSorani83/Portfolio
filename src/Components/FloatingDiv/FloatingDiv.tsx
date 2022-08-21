import React from "react";
import './FloatingDiv.css'

interface IProps {
  img: string;
  text1: string;
  text2: string;
}

const FloatingDiv: React.FC<IProps> = ({img, text1, text2}) => {
  return (
    <div className="floatingDiv">
      <img src={img} alt="" loading="lazy" width="126px" height="126px" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  )
}

export default FloatingDiv;