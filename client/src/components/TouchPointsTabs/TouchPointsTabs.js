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
  FaFileAlt,
  FaNotesMedical,
  FaDollarSign,
  FaChartLine,
  FaUserFriends,
  FaStickyNote,
  FaFileContract,
  FaHandshake,
  FaShieldAlt,
  FaBook,
  FaLeaf,
  FaUserCircle
} from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import "./TouchPointsTabs.css";

const tabGroups = [
  {
    title: "Demographics",
    key: "demographics",
    icon: <FaUserCircle />,
    tabs: [
      { key: "participantInformation", label: "Participant Information", icon: <FaUser /> },
      { key: "familyInformation", label: "Family Information", icon: <FaUsers /> }
    ],
  },
  {
    title: "Services & Actions",
    key: "servicesActions",
    icon: <FaHandshake />,
    tabs: [
      { key: "serviceAndActivities", label: "Service And Activities", icon: <FaClipboardList /> },
      { key: "supportPeriods", label: "Support Periods", icon: <FaCalendarAlt /> },
      { key: "addressBook", label: "Address Book", icon: <FaAddressBook /> },
      { key: "plannedAction", label: "Planned Action", icon: <FaTasks /> },
      { key: "wdyn", label: "What do you need?", icon: <FaQuestionCircle /> },
      { key: "aihw", label: "AIHW", icon: <FaNotesMedical /> },
    ],
  },
  {
    title: "Risk & Compliance",
    key: "riskCompliance",
    icon: <FaShieldAlt />,
    tabs: [
      { key: "safetyAlerts", label: "Safety Alerts", icon: <FaExclamationTriangle /> },
      { key: "consent", label: "Consent", icon: <FaClipboardCheck /> },
    ],
  },
  {
    title: "Finance & Reporting",
    key: "financeReporting",
    icon: <FaBook />,
    tabs: [
      { key: "brokeragePayment", label: "Brokerage Payment", icon: <FaDollarSign /> },
      { key: "msu", label: "MSU", icon: <FaChartLine /> },
      { key: "incomingReferral", label: "Incoming Referral", icon: <FaUserFriends /> },
      { key: "documents", label: "Documents", icon: <FaFileAlt /> },
    ],
  },
  {
    title: "Lotus",
    key: "lotus",
    icon: <FaLeaf />,
    tabs: [
      { key: "lotusNotes", label: "Lotus Notes", icon: <FaStickyNote /> },
      { key: "lotusInitialForm", label: "Lotus Initial Contract Form", icon: <FaFileContract /> },
    ],
  },
  {
    title: "Redress",
    key: "redress",
    icon: <FiRefreshCcw />,
    tabs: [
      { key: "redress", label: "Redress - Initial Contact Form", icon: <FaFileContract /> },
      { key: "redressNotes", label: "Redress Notes", icon: <FaStickyNote /> },
    ],
  },
];

function TouchPointsTabs({ children, activeTab, onTabChange, selectedProgram }) {
  const [search, setSearch] = useState("");
  const [openGroups, setOpenGroups] = useState(() => new Set([tabGroups[0]?.key]));

  const toggleGroup = (groupKey) => {
    setOpenGroups(prev => {
      const next = new Set(prev);
      if (next.has(groupKey)) {
        next.delete(groupKey);
      } else {
        next.add(groupKey);
      }
      return next;
    });
  };

  console.log("selectedProgram===", selectedProgram)
  const normalizedSearch = search.toLowerCase();
  const filteredGroups = tabGroups
  .filter(group => selectedProgram === "778" || group.key !== "lotus")
  .filter(group => selectedProgram === "781" || group.key !== "redress")
  .map(group => {
    const tabs = group.tabs.filter(
      tab =>
        tab.label.toLowerCase().includes(normalizedSearch) &&
        children &&
        children[tab.key]
    );
    return { ...group, tabs };
  })
  .filter(group => group.tabs.length > 0);


  return (
    <div className="side-panel">
      <div className="side-tabs-row">
        <div className="side-tabs-search">
          <input
            type="text"
            placeholder="Search touch points..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          />
        </div>
        <div className="side-tabs-groups">
          {filteredGroups.length === 0 ? (
            <div className="tab-item">No matching tabs found</div>
          ) : (
            filteredGroups.map(group => (
              <div key={group.key} className="tab-group">
                <button
                  type="button"
                  className="tab-group-header"
                  onClick={() => toggleGroup(group.key)}
                >
                  <span className="tab-group-icon">{group.icon}</span>
                  <span className="tab-group-label">{group.title}</span>
                  <span className="tab-group-toggle">{openGroups.has(group.key) ? "−" : "+"}</span>
                </button>
                {openGroups.has(group.key) && (
                  <ul className="side-tabs">
                    {group.tabs.map(tab => (
                      <li
                        key={tab.key}
                        className={`tab-item${activeTab === tab.key ? " active" : ""}`}
                        onClick={() => onTabChange(tab.key)}
                      >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{tab.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="tab-content">
        {children && typeof children === "object" ? children[activeTab] : null}
      </div>
    </div>
  );
}

export default TouchPointsTabs;
