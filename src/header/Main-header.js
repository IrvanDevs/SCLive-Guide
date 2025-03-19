import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Logo from "../images/sc-logo.png";
import { ArrowLeft } from "react-feather";
import "./Main-header.css";

function MainHeader({ showBackButton }) {
  const headerRef = useRef([]); // 

  useEffect(() => {
    gsap.fromTo(
      headerRef.current, //
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="Header-container" ref={headerRef}>
      <div className="Header-wrapper">
        {showBackButton && (
          <Link className="Back-btn" to="/">
            <ArrowLeft size="40px" />
          </Link>
        )}
        <div className="Header-logo">
          <img className="Logo" src={Logo} alt="SC-Logo" />
          <p className="Title Line">|</p>
          <span className="Title">LIVE STREAMER GUIDELINES</span>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
