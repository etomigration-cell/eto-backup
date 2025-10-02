import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import AIHWFormDetailView from "components/AIHWFormsDetailView/AIHWFormDetailView";
import { fetchAIHWForm } from "actions/AIHWForm/AIHWForm";
import Spinner from "common/Spinner/Spinner";
import "./AIHWForm.css";

function AIHWForm({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [AIHWForm, setAIHWForm] = useState([]);
  const [AIHWFormDetails, setAIHWFormDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAIHWForm() {
      try {
        setLoading(true);
        const result = await fetchAIHWForm(participant.clid);
        console.log(result);
        setAIHWForm(result);
        setAIHWFormDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching AIHWForm:", error);
      }
    }

    if (participant.clid) {
      getAIHWForm();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    const detail = AIHWFormDetails.find(d => d.id === row.id) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "General Details, Housing Status",
      content: <AIHWFormDetailView detail={viewedData} />,
    },
    {
      label: "Presenting Reasons",
      content: <AIHWFormDetailView detail={viewedData} />,
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
    <div className="AIHWForm-panel">
      <div className="panel-header">
        <strong>AIHW Form</strong>
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={AIHWForm.minimal || []}
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
            ? `AIHWForm for ${viewedData.program || ""}`
            : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default AIHWForm;
