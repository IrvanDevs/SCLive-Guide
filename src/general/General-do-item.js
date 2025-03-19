import React from "react";
import './General-list-item.css';
import { CheckCircle } from "react-feather";

function GeneralDoItem({ text }) {
  return (
    <div className="General-list">
      <CheckCircle className="Icon" color="#158E19"/>
      <p className="General-list-text">{text}</p>
    </div>
  );
}

export default GeneralDoItem;
