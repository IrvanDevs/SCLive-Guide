import React from "react";
import './Violation-list-item.css';
import { CheckCircle } from "react-feather";

function ViolationDoItem({ text, subtext = [] }) {
  return (
    <div className="Violation-list">
      <CheckCircle className="Icon" color="#158E19"/>
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

export default ViolationDoItem;
