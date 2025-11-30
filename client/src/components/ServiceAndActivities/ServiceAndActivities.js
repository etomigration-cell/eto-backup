import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import ServiceAndActivitiesDetailView from "components/ServiceAndActivitiesDetailView/ServiceAndActivitiesDetailView";
import { fetchServiceActivities } from "actions/ServiceAndActivities/ServiceAndActivities";
import Spinner from "common/Spinner/Spinner";
import SupportServiceActivities from "./SupportServiceActivities";
import AdditionalNeeds from "./AdditionalNeeds";
import "./ServiceAndActivities.css";

function ServiceAndActivities({ participant, config, programCode }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [serviceAndActivities, setServiceAndActivities] = useState([]);
  const [serviceAndActivitiesDetails, setServiceAndActivitiesDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getServiceAndActivities(params) {
      try {
        setLoading(true);
        const result = await fetchServiceActivities(params);
        console.log(result);
        setServiceAndActivities(result);
        setServiceAndActivitiesDetails(result.full);
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
      getServiceAndActivities(params);
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    console.log(row)
    console.log(serviceAndActivitiesDetails)
    const detail = serviceAndActivitiesDetails.find(d => d.formResponseID === row.formResponseID) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "Support Service Activities",
      content: <SupportServiceActivities detail={viewedData} />,
    },
    {
      label: "Any Additional Needs Identified",
      content: <AdditionalNeeds detail={viewedData} />,
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
    <div className="service-and-activities-panel">
      <div className="panel-header">
       {!loading && <strong>Service And Activities</strong> }
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={serviceAndActivities.minimal || []}
            config={configWithActions}
            className="sa-table"
            enableFilter={true}
          />
        </div>
      )}
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
        title={viewedData ? `Service And Activities for ${participant.fName} ${participant.lName}` : ""}
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default ServiceAndActivities;
