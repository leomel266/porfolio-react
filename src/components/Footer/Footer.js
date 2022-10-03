import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-info'>
        <h1>Leonardo Melchiori</h1>
        <p>Argentina - Chubut - Trelew</p>
      </div>
      <div className='footer-contact'>
        <h3>Contact me</h3>
        <p>And let´s get down to work</p>
      </div>
      <div className='footer-sns'>
        <div className='design-by'>Design By Leonardo Melchiori</div>
        <div className='sns-links'>
          <a
            href='https://www.linkedin.com/in/leonardo-melchiori-013678225/'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
          </a>
          <a
            href='https://github.com/leomel266'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-github github'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
