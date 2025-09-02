// Tabs.js
import React, { useState } from 'react';
import './Tabs.css';

export default function Tabs({ tabs, initial = 0 }) {
  const [active, setActive] = useState(initial);
  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={active === idx ? 'active' : ''}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">{tabs[active].content}</div>
    </div>
  );
}
