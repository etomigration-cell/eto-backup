import React, { useState } from 'react';
import { FaUser, FaUsers, FaCalendarAlt, FaExclamationTriangle, FaClipboardList, FaAddressBook, FaTasks, FaQuestionCircle, FaClipboardCheck } from 'react-icons/fa';
import './TouchPointsTabs.css'; // For styling

const tabs = [
  { key: 'participantInformation', label: 'Participant Information', icon: <FaUser /> },
  { key: 'familyInformation', label: 'Family Information', icon: <FaUsers /> },
  { key: 'supportPeriods', label: 'Support Periods', icon: <FaCalendarAlt /> },
  { key: 'safetyAlerts', label: 'Safety Alerts' , icon: <FaExclamationTriangle /> },
  { key: 'serviceAndActivities', label: 'Service And Activities', icon: <FaClipboardList /> },
  { key: 'addressBook', label: 'Address Book', icon: <FaAddressBook /> },
  { key: 'plannedAction', label: 'Planned Action', icon: <FaTasks /> },
  { key: 'wdyn', label: 'What do you need?', icon: <FaQuestionCircle /> },
  { key: 'consent', label: 'Consent', icon: <FaClipboardCheck /> }
];

function TouchPointsTabs({ children }) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div className="side-panel">
      <ul className="side-tabs">
        {tabs.map(tab => (
          <li
            key={tab.key}
            className={`tab-item${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
           <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {/* Render content based on activeTab, or pass children as needed */}
        {children && typeof children === 'object' ? children[activeTab] : null}
      </div>
    </div>
  );
}

export default TouchPointsTabs;
