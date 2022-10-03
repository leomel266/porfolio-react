import React from "react";
import "./About.css";
import DevImg from "./img/imgdev.png";

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>let me tell you about me</h3>
        <p>lorem30</p>
      </div>
      <div className='about-img'>
        <img src={DevImg} alt='about' />
      </div>
    </div>
  );
};

export default About;
