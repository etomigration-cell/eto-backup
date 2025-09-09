import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import ServiceAndActivitiesDetailView from "components/ServiceAndActivitiesDetailView/ServiceAndActivitiesDetailView";
import "./ServiceAndActivities.css";

function ServiceAndActivities({
  serviceAndActivities,
  config,
  serviceAndActivitiesDetails,
}) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState({});

  const handleView = (row) => {
    setViewedData(serviceAndActivitiesDetails[0]);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "Support Service Activities",
      content: <ServiceAndActivitiesDetailView detail={viewedData} />,
    },
    {
      label: "Any Additional Needs Identified",
      content: <ServiceAndActivitiesDetailView detail={viewedData} />,
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
        <strong>Service And Activities</strong>
      </div>
      <div className="panel-section">
        <DynamicTable data={serviceAndActivities} config={configWithActions} />
      </div>
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
        title={
          viewedData
            ? `Service And Activities for the ${viewedData.program}`
            : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default ServiceAndActivities;
