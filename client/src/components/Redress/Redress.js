import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import RedressGeneralDetailView from "../RedressDetailView/RedressGeneralDetailView";
import ExtendedDemographicsDetailView from "../RedressDetailView/ExtendedDemographicsDetailView";
import InstitutionalHistoryDetailView from "../RedressDetailView/InstitutionalHistoryDetailView";
import SurveyQuestionsDetailView from "../RedressDetailView/SurveyQuestionsDetailView";
import EffortsDetailView from "../RedressDetailView/EffortsDetailView";


import { fetchRedress } from "../../actions/RedressAction/RedressAction";
import Spinner from "common/Spinner/Spinner";
import "./Redress.css";

function Redress({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [Redress, setRedress] = useState([]);
  const [RedressDetails, setRedressDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRedress() {
      try {
        setLoading(true);
        const result = await fetchRedress(participant.clid);
        console.log(result);
        setRedress(result);
        setRedressDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching  Redress:", error);
      }
    }

    if (participant.clid) {
      getRedress();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    const detail = RedressDetails.find(d => d.id === row.id) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "General Details",
      content: <RedressGeneralDetailView detail={viewedData} />,
    },
    {
      label: "Extended Demographics",
      content: <ExtendedDemographicsDetailView detail={viewedData} />,
    },
     {
      label: "Institutional History",
      content: <InstitutionalHistoryDetailView detail={viewedData} />,
    },
    {
      label: "Survey Question",
      content: <SurveyQuestionsDetailView detail={viewedData} />,
    },
    {
      label: "Effort Details",
      content: <EffortsDetailView detail={viewedData} />,
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
    <div className="redress-panel">
      <div className="panel-header">
        <strong>Redress - Initial Contact Form</strong>
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={Redress.minimal || []}
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
            ? `Redress for ${viewedData.programName || ""}`
            : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default Redress;