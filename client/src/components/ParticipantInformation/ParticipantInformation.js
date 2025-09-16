import React, { useEffect, useState } from "react";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import defaultAvatar from "images/defaultAvatar.svg";
import ParticipantDetailView from "components/ParticipantDetailView/ParticipantDetailView";
import ParticipantAuditReport from "components/ParticipantAuditReport/ParticipantAuditReport";
import ParticipantProgramHistory from "components/ParticipantProgramHistory/ParticipantProgramHistory";
import {
  fetchParticipantAuditReport,
  fetchParticipantProgramHistory,
} from "actions/ParticipantAction/ParticipantAction";

import "./ParticipantInformation.css";

function ParticipantInformation({ participant }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleView = (data) => setViewedData(data);
  const handleCloseSidebar = () => setViewedData(null);

  const tabEndpoints = [
    (participant) => Promise.resolve(participant),
    (participant) => fetchParticipantAuditReport(participant.id),
    (participant) => fetchParticipantProgramHistory(participant.id),
  ];

  useEffect(() => {
    const loadTabData = async () => {
      console.log("Active Tab:", activeTab);
      console.log("Calling endpoint for tab:", tabEndpoints[activeTab]);
      if (!viewedData) return;
      setLoading(true);
      try {
        if (!tabData[activeTab]) {
          const response = await tabEndpoints[activeTab](viewedData);
          const data =
            typeof response.json === "function"
              ? await response.json()
              : response;
          setTabData((prev) => ({ ...prev, [activeTab]: data }));
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    loadTabData();
  }, [activeTab, viewedData]);

  console.log(activeTab);
  console.log(viewedData);
  console.log(tabData);

  const tabs = [
    {
      label: "Participant Details",
      content: loading ? (
        <div>Loading...</div>
      ) : (
        <ParticipantDetailView participant={tabData[0]} />
      ),
    },
    {
      label: "Participant Audit Report",
      content: loading ? (
        <div>Loading...</div>
      ) : (
        <ParticipantAuditReport auditReport={tabData[1]} />
      ),
    },
    {
      label: "Participant History",
      content: loading ? (
        <div>Loading...</div>
      ) : (
        <ParticipantProgramHistory history={tabData[2]} />
      ),
    },
  ];

  if (!participant)
    return <div className="empty-info">No participant info available.</div>;

  return (
    <div className="participant-info">
      <section className="participant-content">
        <div className="participant-card">
          <div className="card-header">
        
            <div>
              <h2>
                {participant.firstName} {participant.lastName}
              </h2>
              <span className="program">{participant.programName}</span>
            </div>
          </div>
          <div className="card-body participant-info-list">
            <div className="participant-info-row">
              <span className="participant-info-label">First Name</span>
              <span className="participant-info-colon">:</span>
              <span className="participant-info-value">
                {participant.firstName}
              </span>
            </div>
            <div className="participant-info-row">
              <span className="participant-info-label">Last Name</span>
              <span className="participant-info-colon">:</span>
              <span className="participant-info-value">
                {participant.lastName}
              </span>
            </div>
            <div className="participant-info-row">
              <span className="participant-info-label">Date of Birth</span>
              <span className="participant-info-colon">:</span>
              <span className="participant-info-value">{participant.DOB}</span>
            </div>
            <div className="participant-info-row">
              <span className="participant-info-label">Case Number</span>
              <span className="participant-info-colon">:</span>
              <span className="participant-info-value">
                {participant.caseNumber}
              </span>
            </div>
            <div className="participant-info-row">
              <span className="participant-info-label">Real or Fake</span>
              <span className="participant-info-colon">:</span>
              <span className="participant-info-value">
                {participant.status}
              </span>
            </div>
            <div className="participant-info-row">
              <span className="participant-info-label">Gender</span>
              <span className="participant-info-colon">:</span>
              <span className="participant-info-value">
                {participant.gender}
              </span>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="view-full-profile-button"
              onClick={() => handleView(participant)}
            >
              View Full Profile
            </button>
          </div>
        </div>
      </section>
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
        title={
          viewedData ? `Participant details for ${viewedData.firstName}` : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default ParticipantInformation;
