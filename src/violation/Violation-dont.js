import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './Violation-dont.css';
import ViolationDontItem from "../violation/Violation-dont-item";

function ViolationDont() {
  const listRef = useRef([]); // 

  useEffect(() => {
    gsap.fromTo(
      listRef.current, //
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  const items = [
    "Jangan OVERCLAIM tanpa bukti",
    "Jangan OVERCLAIM yang menyinggung KESEHATAN",
    "Jangan SEBUT APAPUN mengenai PENGELOLAAN BB",
    "Jangan SEBUT PLATFORM lain saat live",
    "Beberapa PERATURAN LAIN",
  ];

  const subItems = [
    ["putih dalam 1 minggu saja",
        "menyembuhkan A, menurunkan B, mencerahkan, glowing, untuk ini untuk itu (yang berlebihan)",
        "produk NO.1 di Indonesia"],

    ["pakai ini menyembuhkan diabetes", 
        "menurunkan kadar gula, menurunkan resiko penyakit jantung", 
        "menyembuhkan, meningkatkan, menurunkan, melancarkan dll yang seakan-akan menjanjikan sesuatu"],

    ["melancarkan BAB, Proses BAB, Mendetoks Lemak, Program BB, Program Diet", 
        "menurunkan BB, Menjaga BB, Pola Makan, Program makan, Bikin kenyang lama", 
        "minuman fiber, Low kalori, Zero sugar, bebas gula, dll yang seakan-akan mengelola BB"],

    ["toko oren, toko hijau, instagram, shopee, tokopedia, lazada", 
        "toko sebelah, toko yang itu, checkoutnya disebelah, klik link di bio, dll yang mengarahkan keluar live"],
    
    ["jika outframe atau blank hingga 1 menit akan terkena violation", 
        "jika diam hingga 1 menit akan terkena violation", 
        "berpakaian terbuka, membahas hal seksual, SARA juga akan terkena violation"],
];

  return (
    <div className="ViolationDo-container">
      <div className="ViolationDo-list-wrapper">
        {items.map((text, index) => (
            text ? (
                <div key={index} ref={(el) => (listRef.current[index] = el)}>
                <ViolationDontItem text={text} subtext={subItems[index] || ""} />
                </div>
            ) : null
            ))}
      </div>
    </div>
  );
}

export default ViolationDont;