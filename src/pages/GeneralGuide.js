import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import './GeneralGuide.css';
import GeneralDo from '../general/General-do';
import GeneralDont from '../general/General-dont';

function GeneralGuide() {
    const [activeTab, setActiveTab] = useState("do");
    const generalRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
        generalRef.current,
          { scale: 0},
          { scale: 1, duration: 0.5, stagger:0.2, ease: "power2.out" }
        );
      }, []);

    return (
        <div className="GeneralGuide-container">
            <div className="General-title-wrapper">
                <div ref={(el) => (generalRef.current[0] = el)}>
                    <p 
                        className={`General-title ${activeTab === "do" ? "active" : ""}`} 
                        onClick={() => setActiveTab("do")}>
                        DO<span>(s) | GENERAL</span>
                    </p>               
                </div>

                <div ref={(el) => (generalRef.current[1] = el)}>
                    <p 
                        className={`General-title ${activeTab === "dont" ? "active" : ""}`} 
                        onClick={() => setActiveTab("dont")}>
                        DON'T<span>(s) | GENERAL</span>
                    </p>
                </div>
            </div>        

            {activeTab === "do" ? <GeneralDo /> : <GeneralDont />}
        </div>
    );
}

export default GeneralGuide;
