import React from "react";
import './Violation-list-item.css';
import { XCircle } from "react-feather";

function ViolationDontItem({ text, subtext = [] }) {
  return (
    <div className="Violation-list">
      <XCircle className="Icon" color="#8e1515"/>
      <div className="Violation-content-list">
        <p className="Violation-list-text">{text}</p>
        {subtext.length > 0 && (
          <ul className="Violation-sublist">
            {subtext.map((item, index) => (
              <li key={index} className="Violation-sublist-text">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ViolationDontItem;
