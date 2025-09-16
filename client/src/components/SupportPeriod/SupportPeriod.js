import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import SupportPeriodDetailView from "components/SupportPeriodDetailView/SupportPeriodDetailView";
import { fetchSupportedPeriod } from "actions/SupportPeriodAction/SupportPeriodAction";
import Spinner from "common/Spinner/Spinner";

import "./SupportPeriod.css";

function SupportPeriods({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [supportPeriod, setSupportPeriod] = useState([]);
  const [supportPeriodDetails, setSupportPeriodDetails] = useState([]);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getSupportedPeriod() {
      try {
        setLoading(true);
        const result = await fetchSupportedPeriod(participant.id);
        console.log(result);
        setSupportPeriod(result);
        setSupportPeriodDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching family members:", error);
      }
    }

    if (participant.id) {
      getSupportedPeriod();
    }
  }, [participant.id]);

  const handleView = (row) => {
    console.log(row);
    console.log(supportPeriodDetails[row]);
    setViewedData(row);
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
      {loading && <Spinner />}
      {!loading && <div className="sp-table-wrapper">
        <DynamicTable data={supportPeriod.minimal} config={configWithActions} className="sp-table" />
      </div>}
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
