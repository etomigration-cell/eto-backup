// Tabs.js
import React, { useState } from "react";
import "./Tabs.css";

export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={activeTab === idx ? "active" : ""}
            onClick={() => onTabChange(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
}
