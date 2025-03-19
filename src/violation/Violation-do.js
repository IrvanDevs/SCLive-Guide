import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './Violation-do.css';
import ViolationDoItem from "../violation/Violation-do-item";

function ViolationDo() {
  const listRef = useRef([]); // 

  useEffect(() => {
    gsap.fromTo(
      listRef.current, //
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  const items = [
    "MENGGUNAKAN kata MEMBANTU",
    "MENGGUNAKAN kalimat tambahan seperti",
    "MELAKUKAN DEMO produk secara live",
    "KLAIM hanya jika ada bukti, namun tidak OVERCLAIM",
    "Memberitahu CARA PEMAKAIAN yang benar",
    "Jika terkait BB, lebih baik HATI-HATI karena segala sesuatu yang mengarah untuk mengelola BB pasti akan terkena violation",
    "Jika tidak yakin dengan kata-kata, lebih baik jawab di kolom komentar saja",
  ];

  const subItems = [
    ["membantu jaga tulang, membantu multivitamin anak, dll (dibikin ambigu, namun jelas)"],
    ["hasil setiap orang dapat berbeda-beda", 
      "harus dikuti gaya hidup sehat dan tetap konsultasikan ke dokter"],
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <div className="ViolationDo-container">
      <div className="ViolationDo-list-wrapper">
        {items.map((text, index) => (
            text ? (
                <div key={index} ref={(el) => (listRef.current[index] = el)}>
                <ViolationDoItem text={text} subtext={subItems[index] || ""} />
                </div>
            ) : null
            ))}
      </div>
    </div>
  );
}

export default ViolationDo;