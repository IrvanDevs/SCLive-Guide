import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import './ViolationGuide.css';
import ViolationDo from '../violation/Violation-do';
import ViolationDont from '../violation/Violation-dont';


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
        <div className="ViolationGuide-container">
            <div className="Violation-title-wrapper">
                <div ref={(el) => (generalRef.current[0] = el)}>
                    <p 
                        className={`Violation-title ${activeTab === "do" ? "active" : ""}`} 
                        onClick={() => setActiveTab("do")}>
                        DO<span>(s) | VIOLATION</span>
                    </p>               
                </div>

                <div ref={(el) => (generalRef.current[1] = el)}>
                    <p 
                        className={`Violation-title ${activeTab === "dont" ? "active" : ""}`} 
                        onClick={() => setActiveTab("dont")}>
                        DON'T<span>(s) | VIOLATION</span>
                    </p>
                </div>
            </div>        

            {activeTab === "do" ? <ViolationDo /> : <ViolationDont />}
        </div>
    );
}

export default GeneralGuide;
