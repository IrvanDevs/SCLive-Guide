import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './General-dont.css';
import GeneralDontItem from "./General-dont-item";


function GeneralDont() {
  const listRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      listRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  const items = [
    "Jangan DIAM atau BINGGUNG",
    "Jangan terlalu lama JELASIN PRODUK YANG SAMA, kecuali terdapat flashsale/diskon gede",
    "Jangan MENGABAIKAN KOMENTAR atau PERTANYAAN",
    "Jangan bicara TERLALU CEPAT atau TERLALU LEMAS, santai saja dan tetap semangat",
    "Jangan live TANPA INTERAKSI",
    "Penampilan jangan BERANTAKAN, seperti rambut atau pakaian yang terlalu heboh",
    "Jangan MENGULANG-ULANG PERKATAAN, apalagi diulang sampai 100x :/",
    "Jangan TELAT LIVE! Jika telat mohon SESUAIKAN DURASI atau LEBIHKAN jika itu brand",
  ];

    return (
      <div className="GeneralDont-container">
        <div className="GeneralDont-list-wrapper">
          {items.map((text,index) => (
            <div key={index} ref={(el) => (listRef.current[index] = el)}>
              <GeneralDontItem text={text}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default GeneralDont;