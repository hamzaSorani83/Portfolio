import React from "react";
import "./Card.css"

interface IProps {
  emoji: string;
  heading: string;
  details: string;
}

const Services: React.FC<IProps> = ({emoji, heading, details}) => {
  return (
    <div className="card">
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{details}</span>
      <a href="https://t.me/hamzaSo83" rel="noreferrer" target="_blank">
        <button className="button c-button">Hire me</button>
      </a>
    </div>
  )
}

export default Services;