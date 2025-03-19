import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './General-do.css';
import GeneralDoItem from "./General-do-item";

function GeneralDo() {
  const listRef = useRef([]); // 

  useEffect(() => {
    gsap.fromTo(
      listRef.current, //
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  const items = [
    "Live INTERAKTIF, mengajak penonton untuk KOMEN, LIKES, SHARE",
    "Biasakan MENYAPA PENONTON yang masuk, dan tanya KEBUTUHANNYA",
    "Menjelaskan PRODUK ETALASE jika tidak ada yang BERTANYA",
    "Live SEMANGAT, ATUR NAFAS agar tidak kehabisan ENERGI",
    "Live semangat, mengatur nafas agar tidak kehabisan energi",
    "Melakukan AUDIO dan FRAME CHECK sebelum dan sesudah live dimulai",
    "Lebih SERING EYE CONTACT ke kamera walaupun saat sedang PIN PRODUK",
    "Memberikan Call to Action yang jelas, namun tidak diulang-ulang",
  ];

  return (
    <div className="GeneralDo-container">
      <div className="GeneralDo-list-wrapper">
        {items.map((text, index)=> (
          <div key={index} ref={(el) => (listRef.current[index] = el)}>
            <GeneralDoItem text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralDo;