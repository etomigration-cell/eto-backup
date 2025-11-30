import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import RedressNotesGeneralDetailView from "../RedressNotesDetailView/RedressNotesGeneralDetailView";
import RedressNotesDetailView from "../RedressNotesDetailView/RedressNotesDetailView";
import RedressNotesScoringDetailView from "../RedressNotesDetailView/RedressNotesScoringDetailView";
import RedressNotesEffortsDetailView from "../RedressNotesDetailView/RedressNotesEffortsDetailView";


import { fetchRedressNotes } from "../../actions/RedressNotesAction/RedressNotesAction";
import Spinner from "common/Spinner/Spinner";
import "./RedressNotes.css";

function RedressNotes({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [RedressNotes, setRedressNotes] = useState([]);
  const [RedressNotesDetails, setRedressNotesDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRedressNotes() {
      try {
        setLoading(true);
        const result = await fetchRedressNotes(participant.clid);
        console.log(result);
        setRedressNotes(result);
        setRedressNotesDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching  Redress Notes:", error);
      }
    }

    if (participant.clid) {
      getRedressNotes();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    const detail = RedressNotesDetails.find(d => d.id === row.id) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "General Details",
      content: <RedressNotesGeneralDetailView detail={viewedData} />,
    },
    {
      label: "Notes",
      content: <RedressNotesDetailView detail={viewedData} />,
    },
     {
      label: "Scoring",
      content: <RedressNotesScoringDetailView detail={viewedData} />,
    },
 
    {
      label: "Effort Details",
      content: <RedressNotesEffortsDetailView detail={viewedData} />,
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
    <div className="redressNotes-panel">
      <div className="panel-header">
        <strong>Redress Notes</strong>
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={RedressNotes.minimal || []}
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
            ? `Redress Notes for ${viewedData.programName || ""}`
            : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default RedressNotes;