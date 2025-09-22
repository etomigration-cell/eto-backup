import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import ServiceAndActivitiesDetailView from "components/ServiceAndActivitiesDetailView/ServiceAndActivitiesDetailView";
import { fetchServiceActivities } from "actions/ServiceAndActivities/ServiceAndActivities";
import Spinner from "common/Spinner/Spinner";
import "./ServiceAndActivities.css";

function ServiceAndActivities({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [serviceAndActivities, setServiceAndActivities] = useState([]);
  const [serviceAndActivitiesDetails, setServiceAndActivitiesDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getServiceAndActivities() {
      try {
        setLoading(true);
        const result = await fetchServiceActivities(participant.clid);
        console.log(result);
        setServiceAndActivities(result);
        setServiceAndActivitiesDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching service and activities:", error);
      }
    }

    if (participant.clid) {
      getServiceAndActivities();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    const detail = serviceAndActivitiesDetails.find(d => d.id === row.id) || row;
    setViewedData(detail);
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
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={serviceAndActivities.minimal || []}
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
            ? `Service And Activities for ${viewedData.program || ""}`
            : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default ServiceAndActivities;
