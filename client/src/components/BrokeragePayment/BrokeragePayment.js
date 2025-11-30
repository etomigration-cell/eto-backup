import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import DynamicTable from "common/DynamicTable/DynamicTable";
import Sidebar from "components/Sidebar/Sidebar";
import Tabs from "components/Tabs/Tabs";

import BrokeragePaymentDetailView from "../BrokeragePaymentDetailView/BrokeragePaymentDetailView";
import { fetchBrokeragePayment } from "actions/BrokeragePaymentAction/BrokeragePaymentAction";
import Spinner from "common/Spinner/Spinner";
import "./BrokeragePayment.css";

function BrokeragePayment({ participant, config }) {
  const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [BrokeragePayment, setBrokeragePayment] = useState([]);
  const [BrokeragePaymentDetails, setBrokeragePaymentDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getBrokeragePayment() {
      try {
        setLoading(true);
        const result = await fetchBrokeragePayment(participant.clid);
        console.log(result);
        setBrokeragePayment(result);
        setBrokeragePaymentDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Brokerage Payment:", error);
      }
    }

    if (participant.clid) {
      getBrokeragePayment();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    // If you want to pass the full detail instead of row
    const detail = BrokeragePaymentDetails.find(d => d.id === row.id) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "General Details, Brokerage Payment Detail",
      content: <BrokeragePaymentDetailView detail={viewedData} />,
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
    <div className="BrokeragePayment-panel">
      <div className="panel-header">
        <strong>Brokerage Payment</strong>
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="panel-section">
          <DynamicTable
            data={BrokeragePayment.minimal || []}
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
            ? `Brokerage Payment for ${viewedData.programName || ""}`
            : ""
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default BrokeragePayment;