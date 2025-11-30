import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import ConsentDetailView from "../ConsentDetailView/ConsentDetailView";
import { fetchConsent } from "../../actions/ConsentAction/ConsentAction";
import Spinner from "common/Spinner/Spinner";
import "./Consent.css";

function Consent({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [Consent, setConsent] = useState([]);
  const [ConsentDetails, setConsentDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getConsent() {
      try {
        setLoading(true);
        const result = await fetchConsent(participant.clid);
        console.log(result);
        setConsent(result);
        setConsentDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching  Consent:", error);
      }
    }

    if (participant.clid) {
      getConsent();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    const detail =ConsentDetails.find(d => d.id === row.id) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "Consent to Record & Store Info & Authority",
      content: <ConsentDetailView detail={viewedData} />,
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
    <div className="consent-panel">
      <div className="panel-header">
        <strong>Consent</strong>
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={Consent.minimal || []}
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
            ? `Consent for ${viewedData.programName || ""}`
            : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default Consent;