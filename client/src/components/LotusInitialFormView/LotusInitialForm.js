import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import { fetchLotusInitialForm } from "actions/LotusInitialFormAction/LotusInitialFormAction";
import Spinner from "common/Spinner/Spinner";
import GeneralDetails from "./GeneralDetails";
import EffortDetails from "./EffortDetails";
import InstitutionalHistory from "./InstitutionalHistory";
import ExtendedDemographics from "./ExtendedDemographics";
import SurveyQuestions from "./SurveyQuestions";
import "./LotusInitialForm.css";

function LotusInitialForm({ participant, config, programCode }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [lotusInitiaForm, setLotusInitiaForm] = useState([]);
  const [lotusInitiaFormDetails, setLotusInitiaFormDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getLotusInitialForm(params) {
      try {
        setLoading(true);
        const result = await fetchLotusInitialForm(params);
        console.log(result);
        setLotusInitiaForm(result);
        setLotusInitiaFormDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching service and activities:", error);
      }
    }

    const params = new URLSearchParams({
      id: participant.clid,
      programCode: programCode
      });

    if (participant.clid) {
      getLotusInitialForm(params);
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    console.log(row)
    console.log(lotusInitiaFormDetails)
    const detail = lotusInitiaFormDetails.find(d => d.formResponseID === row.formResponseID) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "General Details",
      content: <GeneralDetails detail={viewedData} />,
    },
    {
      label: "Extended Demographics",
      content: <ExtendedDemographics detail={viewedData} />,
    },
    {
      label: "Survey Questions",
      content: <SurveyQuestions detail={viewedData} />,
    },
    {
      label: "Institutional History",
      content: <InstitutionalHistory detail={viewedData} />,
    },
    {
      label: "Effort Details",
      content: <EffortDetails detail={viewedData} />,
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
    <div className="lotus-form-panel">
      <div className="panel-header">
       {!loading && <strong>Lotus Initial Contract Form</strong> }
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={lotusInitiaForm.minimal || []}
            config={configWithActions}
            className="lotus-form-table"
            enableFilter={true}
          />
        </div>
      )}
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
        title={viewedData ? `Lotus initial contract form for ${participant.fName} ${participant.lName}` : ""}
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default LotusInitialForm;
