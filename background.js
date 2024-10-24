import React from 'react';
import './background.scss'; // Import the CSS file for background


const Background = () => {
  return (
    <div>
      <div className="container">
        <div className="ground"></div>
        <div className="ground-one"></div>
        <div className="bush-one"></div>
        <div className="building-left">
          <div className="top"></div>
        </div>
        <div className="building-right">
          <div className="top"></div>
        </div>
        <div className="building">
          <div className="top"></div>
          <div className="window-1"></div>
          <div className="window-2"></div>
          <div className="window-3"></div>
          <div className="window-4"></div>
          <div className="window-5"></div>
          <div className="window-6"></div>
          <div className="window-7"></div>
          <div className="window-8"></div>
        </div>
        <div className="bush-two"></div>
        <div className="bush-three"></div>
        <div className="stem-one">
          <div className="leaves-one"></div>
          <div className="leaves-two"></div>
          <div className="branch"></div>
        </div>
        <div className="balloon">
          <div className="base"></div>
          <div className="head"></div>
        </div>
      </div>
      <div class="right-text"><h1>Welcome To Cambios Realestate</h1></div>
      <div className="button-container">
        <button className="button">Check Me</button>
      </div>
    </div>
  );
};

export default Background;
