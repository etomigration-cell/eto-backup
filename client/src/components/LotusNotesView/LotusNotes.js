import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import { fetchLotusNotes } from "actions/LotusNotesAction/LotusNotesAction";
import Spinner from "common/Spinner/Spinner";
import EffortDetails from "./EffortDetails";
import GeneralDetails from "./GeneralDetails";
import Notes from "./Notes";
import "./LotusNotes.css";

function LotusNotes({ participant, config, programCode }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [lotusNotes, setLotusNotes] = useState([]);
  const [lotusNotesDetails, setlotusNotesDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getLotusNotes(params) {
      try {
        setLoading(true);
        const result = await fetchLotusNotes(params);
        console.log(result);
        setLotusNotes(result);
        setlotusNotesDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lotus notes:", error);
      }
    }

    const params = new URLSearchParams({
      id: participant.clid,
      programCode: programCode
      });

    if (participant.clid) {
      getLotusNotes(params);
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    console.log(row)
    console.log(lotusNotesDetails)
    const detail = lotusNotesDetails.find(d => d.formResponseID === row.formResponseID) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "General Details",
      content: <GeneralDetails detail={viewedData} />,
    },
    {
      label: "Notes",
      content: <Notes detail={viewedData} />,
    },
    {
      label: "Effort Details",
      content: <EffortDetails detail={viewedData} />,
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
    <div className="lotus-notes-panel">
      <div className="panel-header">
       {!loading && <strong>Lotus Notes</strong> }
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={lotusNotes.minimal || []}
            config={configWithActions}
            className="lotus-notes-table"
            enableFilter={true}
          />
        </div>
      )}
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
        title={viewedData ? `Lotus Notes for ${participant.fName} ${participant.lName}` : ""}
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default LotusNotes;
