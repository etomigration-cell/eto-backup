import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";

import MSUDetailView from "../MSUDetailView/MSUDetailView";
import MSUMCQDetailView from "../MSUDetailView/MSUMCQDetailView";
import MSUEffortDetailView from "../MSUDetailView/MSUEffortDetailView";
import MSUECDetailView from "../MSUDetailView/MSUECDetailView";
import { fetchMSU } from "../../actions/MSUAction/MSUAction";
import Spinner from "common/Spinner/Spinner";


function MSU({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [MSU, setMSU] = useState([]);
  const [MSUDetails, setMSUDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMSU() {
      try {
        setLoading(true);
        const result = await fetchMSU(participant.clid);
        console.log(result);
        setMSU(result);
        setMSUDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching  MSU:", error);
      }
    }

    if (participant.clid) {
      getMSU();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    const detail = MSUDetails.find(d => d.id === row.id) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "Monthly Status Update - SHS Reporting",
      content: <MSUDetailView detail={viewedData} />,
    },
    // {
    //   label: "Monthly Circumstances Questions",
    //   content: <MSUMCQDetailView detail={viewedData} />,
    // },
    //  {
    //   label: "Efforts Details",
    //   content: <MSUEffortDetailView detail={viewedData} />,
    // },
    // {
    //   label: "Exclusions to Consent",
    //   content: <MSUECDetailView detail={viewedData} />,
    // }
    
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
    <div className="msu-panel">
      <div className="panel-header">
        <strong>Monthly Status Update</strong>
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={MSU.minimal || []}
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
            ? `MSU for ${viewedData.program || ""}`
            : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default MSU;
