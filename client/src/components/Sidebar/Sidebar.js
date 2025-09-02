// Sidebar.js
import React from 'react';
import './Sidebar.css';

export default function Sidebar({ visible, onClose, title, children }) {
  if (!visible) return null;

  return (
    <div
      className="sidebar-backdrop"
      onClick={onClose}
    >
      <div
        className="sidebar"
        onClick={e => e.stopPropagation()}
      >
        <div className="sidebar-header">
          <span className="sidebar-title">{title}</span>
          <button className="sidebar-close" onClick={onClose}>×</button>
        </div>
        <div className="sidebar-content">{children}</div>
      </div>
    </div>
  );
}
