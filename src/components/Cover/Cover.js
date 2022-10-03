import React from "react";
import "./Cover.css";
import covertVideo from "./media/covertVideo.mp4";

const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video' src={covertVideo} autoPlay loop muted />
      <h1>Leonardo Melchiori</h1>
      <p>Developer | JavaScript | React | Python </p>
    </div>
  );
};

export default Cover;
