import React, { useState } from "react";
import {
  FaUser,
  FaHome, FaCog, FaUserShield
} from "react-icons/fa";
import "./MainSideTabs.css";

const tabs = [
  
  { key: "home", label: "Home", icon: <FaHome /> },
  { key: "settings", label: "Settings", icon: <FaCog /> },
  {
    key: "participantInformation",
    label: "Participant Information",
    icon: <FaUser />,
  }
];

function MainSideTabs({ children, activeTab, onTabChange }) {
  const [search, setSearch] = useState("");

  // Filter tabs whose labels match the search, and whose key exists & is truthy in children
  const filteredTabs = tabs.filter(
    (tab) =>
      tab.label.toLowerCase().includes(search.toLowerCase()) &&
      children &&
      children[tab.key]
  );

  return (
    <div className="side-panel">
      <div className="side-tabs-row">
        <ul className="side-tabs">
          {filteredTabs.length === 0 ? (
            <li className="tab-item">No matching tabs found</li>
          ) : (
            filteredTabs.map(tab => (
              <li
                key={tab.key}
                className={`tab-item${activeTab === tab.key ? " active" : ""}`}
                onClick={() => onTabChange(tab.key)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="tab-content">
        {children && typeof children === "object" ? children[activeTab] : null}
      </div>
    </div>
  );
}


export default MainSideTabs;
