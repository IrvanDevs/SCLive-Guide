import React from "react";
import "./Loading.css";
import Logo from "./images/sc-logo.png";

function Loading() {
  return (
    <div className="Loading-container">
      <div className="Loading-screen">
        <div className="Loading-logo">
          <img className="Sc-Load-Logo" src={Logo} alt="SC-Logo" />
          <p className="Loading-title Loading-line">|</p>
          <span className="Loading-title">LIVE STREAMER GUIDELINES</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
