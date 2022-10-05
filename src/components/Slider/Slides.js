import React from "react";
import Movies from "./media/Movies.png";
import "./Slider.css";

const slidesInfo = [
  {
    src: Movies,
    alt: "Movie search engine",
    desc: "Movie search engine",
    link: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "p2",
    desc: "p2",
    link: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "p3",
    desc: "p3",
    link: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className='slide-container'>
    <img src={slide.src} alt={slide.alt} />
    <div className='slide-desc'>
      <span>{slide.desc}</span>
      <a href='https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg'>
        Go to see it
      </a>
    </div>
  </div>
));

export default slides;
