import React from 'react';
import './hero.css';
import hand_icon from '../assets/hand_icon.png';
import arr_bt from '../assets/arrow.png';
import her_img from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
          <div className="hand-hand-icon">
            <p>NEW</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-butt">
          <h1>Latest Collection</h1>
          <img src={arr_bt} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={her_img} alt="" />
        <div className="diamond-star-container">
        <div className="diamond-sta"></div>
        <div className="diamond-star1"></div>
        </div>
      </div>

      {/* Bottom Bold Line */}
      <div className="hero-bottom-line"></div>
    </div>
  );
};

export default Hero;
