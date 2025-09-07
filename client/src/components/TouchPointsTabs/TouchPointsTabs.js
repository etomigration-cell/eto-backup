import React, { useState } from "react";
import {
  FaUser,
  FaUsers,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaClipboardList,
  FaAddressBook,
  FaTasks,
  FaQuestionCircle,
  FaClipboardCheck,
} from "react-icons/fa";
import "./TouchPointsTabs.css";

const tabs = [
  {
    key: "participantInformation",
    label: "Participant Information",
    icon: <FaUser />,
  },
  { key: "familyInformation", label: "Family Information", icon: <FaUsers /> },
  { key: "supportPeriods", label: "Support Periods", icon: <FaCalendarAlt /> },
  {
    key: "safetyAlerts",
    label: "Safety Alerts",
    icon: <FaExclamationTriangle />,
  },
  {
    key: "serviceAndActivities",
    label: "Service And Activities",
    icon: <FaClipboardList />,
  },
  { key: "addressBook", label: "Address Book", icon: <FaAddressBook /> },
  { key: "plannedAction", label: "Planned Action", icon: <FaTasks /> },
  { key: "wdyn", label: "What do you need?", icon: <FaQuestionCircle /> },
  { key: "consent", label: "Consent", icon: <FaClipboardCheck /> },
  {
    key: "aihw",
    label: "AIHW",
    icon: <FaUser />,
  },
  { key: "cansas", label: "CANSAS", icon: <FaUsers /> },
  { key: "childSafety", label: "Child Safety", icon: <FaCalendarAlt /> },
  {
    key: "hiveIntake",
    label: "Hive Intake",
    icon: <FaExclamationTriangle />,
  },
  {
    key: "housing",
    label: "Housing App Progress",
    icon: <FaClipboardList />,
  }
];

function TouchPointsTabs({ children, activeTab, onTabChange }) {
  const [search, setSearch] = useState("");

  const filteredTabs = tabs.filter((tab) =>
    tab.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="side-panel">
      <div className="side-tabs-row">
        <div className="side-tabs-search">
          <input
            type="text"
            placeholder="Search touch points..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          />
        </div>
        <ul className="side-tabs">
          {filteredTabs.length === 0 ? (
            <li className="tab-item">No matching tabs found</li>
          ) : (
            filteredTabs.map((tab) => (
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

export default TouchPointsTabs;
