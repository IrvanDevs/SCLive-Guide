import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import './Menu.css';



function Menu() {
  const menuRef = useRef([]);
  const textRef = useRef([]);
  
  useEffect(() => {
    gsap.fromTo(
      menuRef.current,
      { scale: 0},
      { scale: 1, duration: 0.5, stagger:0.2, ease: "power2.out" }
    );

    const chars = textRef.current.innerText.split(""); 
    textRef.current.innerHTML = "";

    chars.forEach((char, i) => {
      let span = document.createElement("span"); 
      span.innerText = char;
      textRef.current.appendChild(span);

      gsap.fromTo(
        span,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, delay: i * 0.05, ease: "power2.out" }
      );
    });
  }, []);

    return (
      <div className="Menu-container">
        <div className="Menu-wrapper">
          <p className="Menu-title" ref={textRef}>CHOOSE THE TOPIC</p>

          <div className="Menu-list">
            <Link className="Link" to="/GeneralGuide" ref={(el) => (menuRef.current[0] = el)}>
              <div className="Menu">
                <p className="List-title">
                  DO<span>(s)</span> & DON'T<span>(s)</span>
                  <br />
                  <span>SECARA GENERAL</span>
                </p>
              </div>       
            </Link>

            <Link className="Link" to="/ViolationGuide" ref={(el) => (menuRef.current[1] = el)}>
              <div className="Menu">
                <p className="List-title">
                  DO<span>(s)</span> & DON'T<span>(s)</span>
                  <br />
                  <span>TERKAIT VIOLATION</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Menu;