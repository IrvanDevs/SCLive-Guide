import React from "react";
import './General-list-item.css';
import { XCircle } from "react-feather";

function GeneralDontItem({ text }) {
  return (
    <div className="General-list">
      <XCircle className="Icon" color="#8e1515"/>
      <p className="General-list-text">{text}</p>
    </div>
  );
}

export default GeneralDontItem;
