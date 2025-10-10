import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";

import SaftyAlertsDetailView from "../../components/SaftyAlertDetailView/SaftyAlertsDetailView";
import { fetchSaftyAlerts } from "../../actions/SaftyAlertsAction/SaftyAlertsAction";
import Spinner from "common/Spinner/Spinner";


function SaftyAlerts({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [SaftyAlerts, setSaftyAlerts] = useState([]);
  const [SaftyAlertsDetails, setSaftyAlertsDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getSaftyAlerts() {
      try {
        setLoading(true);
        const result = await fetchSaftyAlerts(participant.clid);
        console.log(result);
        setSaftyAlerts(result);
        setSaftyAlertsDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Brokerage Payment:", error);
      }
    }

    if (participant.clid) {
      getSaftyAlerts();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    const detail = SaftyAlertsDetails.find(d => d.id === row.id) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "Details",
      content: <SaftyAlertsDetailView detail={viewedData} />,
    }    
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
    <div className="saftyalerts-panel">
      <div className="panel-header">
        <strong>Safty Alert</strong>
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={SaftyAlerts.minimal || []}
            config={configWithActions}
            className="sa-table"
            enableFilter={false}
          />
        </div>
      )}
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
        title={
          viewedData
            ? `Safty Alerts for ${viewedData.program || ""}`
            : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default SaftyAlerts;
