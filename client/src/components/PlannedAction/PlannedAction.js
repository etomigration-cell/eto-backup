import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import SupportPeriodDetailView from "components/SupportPeriodDetailView/SupportPeriodDetailView";
import { fetchPlannedAction } from "actions/PlannedAction/PlannedAction";
import Spinner from "common/Spinner/Spinner";

import "./PlannedAction.css";

function PlannedActions({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [plannedActions, setPlannedActions] = useState([]);
  const [plannedActionDetails, setPlannedActionDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPlannedAction() {
      try {
        setLoading(true);
        const result = await fetchPlannedAction(participant.clid);
        console.log(result);
        setPlannedActions(result);
        setPlannedActionDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching planned action:", error);
      }
    }

    if (participant.clid) {
      getPlannedAction();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    console.log("row-id", row.id);
    //console.log(supportPeriodDetails.find( suppDetails => suppDetails.id === row.id));
    setViewedData(plannedActions.find( plannedAction => plannedAction.id === row.id));
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
    <div className="planned-actions-panel">
      <div className="panel-header">
        <strong>Planned Action</strong>
      </div>
      {loading && <Spinner />}
      {!loading && <div className="pa-table-wrapper">
        <DynamicTable data={plannedActions.minimal || []} config={configWithActions} className="pa-table" enableFilter={true}/>
      </div>}
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
       title={viewedData ? `Planned Action for ${participant.fName} ${participant.lName}` : ""}
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default PlannedActions;
