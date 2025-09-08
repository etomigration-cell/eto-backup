import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import SupportPeriodDetailView from "components/SupportPeriodDetailView/SupportPeriodDetailView";
import { fetchSupportedPeriod } from "actions/SupportPeriodAction/SupportPeriodAction";

import "./SupportPeriod.css";

function SupportPeriods({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [supportPeriod, setSupportPeriod] = useState([]);
  const [supportPeriodDetails, setSupportPeriodDetails] = useState([]);
  const [tabData, setTabData] = useState({});

  useEffect(() => {
    async function getSupportedPeriod() {
      try {
        const result = await fetchSupportedPeriod(participant.id);
        setSupportPeriod(result.supportPeriod);
        setSupportPeriodDetails(result.supportPeriodDetails);
      } catch (error) {
        console.error("Error fetching family members:", error);
      }
    }

    if (participant.id) {
      getSupportedPeriod();
    }
  }, [participant.id]);

  const handleView = (row) => {
    console.log(supportPeriodDetails);
    setViewedData(supportPeriodDetails);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "Support Period",
      content: <SupportPeriodDetailView detail={viewedData} />,
    },
  ];

  const configWithActions = {
    ...config,
    columns: config.columns.map((col) =>
      col.key === "actions"
        ? {
            ...col,
            render: (row) => (
              <button
                title="View"
                onClick={() => handleView(row)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem",
                }}
              >
                <FaEye size={20} color="currentColor" />
              </button>
            ),
          }
        : col,
    ),
  };

  return (
    <div className="support-periods-panel">
      <div className="panel-header">
        <strong>Support Periods</strong>
      </div>
      <div className="panel-section">
        <DynamicTable data={supportPeriod ? [supportPeriod] : []} config={configWithActions} />
      </div>
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
        title={viewedData ? `Support Period for ${viewedData.program}` : ""}
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default SupportPeriods;
