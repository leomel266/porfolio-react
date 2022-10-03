import React from "react";
import "./About.css";
import DevImg from "./img/imgdev.png";

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Let me tell you about me</h3>
        <p>
          I am a developer looking for my first formal job in programming, I
          consider that I have the necessary tools and knowledge to enter this
          sector. As proof of this, I have some fairly complete projects that
          you can see in the slider below.
        </p>
      </div>
      <div className='about-img'>
        <img src={DevImg} alt='about' />
      </div>
    </div>
  );
};

export default About;
