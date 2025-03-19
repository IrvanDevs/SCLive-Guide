import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import './Back-btn.css';
import { ArrowLeft } from 'react-feather';


function Backbtn() {

  const btnRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, x: 1},
      { opacity: 1, x: 0, duration: 1, ease: "bounce.out" }
    );
  }, []);

    return (
        <div className="Backbtn-wrapper">
          <Link className="Link" to="/" ref={btnRef}>
            <div className="Back-btn">
              <ArrowLeft size="40px"/>
            </div>         
          </Link>
        </div>
    );
  }
  
  export default Backbtn;