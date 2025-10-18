import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";
import { fetchIncomingReferrals } from "actions/IncomingReferralAction/IncomingReferralAction";
import Spinner from "common/Spinner/Spinner";
import IncomingReferralDetails from "./IncomingReferralDetails";
import "./IncomingReferral.css";

function IncomingReferral({ participant, config, programCode }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [incomingReferral, setIncomingReferral] = useState([]);
  const [incomingReferralDetails, setIncomingReferralDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getIncomingReferrals(params) {
      try {
        setLoading(true);
        const result = await fetchIncomingReferrals(params);
        console.log(result);
        setIncomingReferral(result);
        setIncomingReferralDetails(result.full);
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
      getIncomingReferrals(params);
    }
  }, [participant.clid]);

  const handleView = (row) => {
    const detail = incomingReferralDetails.find(d => d.formResponseID === row.formResponseID) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "Incoming Referral",
      content: <IncomingReferralDetails detail={viewedData} />,
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
    <div className="incoming-referral-panel">
      <div className="panel-header">
        <strong>Incoming referral</strong>
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={incomingReferral.minimal || []}
            config={configWithActions}
            className="incoming-referral-table"
            enableFilter={true}
          />
        </div>
      )}
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
        title={viewedData ? `Incoming Referral for ${participant.fName} ${participant.lName}` : ""}
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default IncomingReferral;
