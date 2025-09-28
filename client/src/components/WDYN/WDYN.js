import React, { useState, useEffect } from 'react';
import './WDYN.css';
import { FaEye } from 'react-icons/fa';
import Sidebar from 'components/Sidebar/Sidebar';
import Tabs from 'components/Tabs/Tabs';
import DynamicTable from 'common/DynamicTable/DynamicTable';
import WdynDetailView from '../WDYNDetailView/WDYNDetailView';
import Spinner from "common/Spinner/Spinner";
import { fetchWdyn } from "actions/WdynAction/WdynAction"

function Wdyn({ participant, config }) {
const [viewedData, setViewedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [wdyn, setWdyn] = useState([]);
  const [wdynDetails, setWdynDetails] = useState([]);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getWdyn() {
      try {
        setLoading(true);
        const result = await fetchWdyn(participant.clid);
        console.log(result);
        setWdyn(result);
        setWdynDetails(result.full);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching family members:", error);
      }
    }

    if (participant.clid) {
      getWdyn();
    }
  }, [participant.clid]);

  const handleView = (row) => {
    const detail = wdynDetails.find(wdyn => wdyn.formResponseID === row.formResponseID) || row;
    setViewedData(detail);
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: "Wdyn",
      content: <WdynDetailView detail={viewedData} />,
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
    <div className="wdyn-panel">
      <div className="panel-header">
        <strong>What do you need?</strong>
      </div>
      {loading && <Spinner />}
      {!loading && <div className="wdyn-table-wrapper">
        <DynamicTable data={wdyn?.minimal || []} config={configWithActions} className="wdyn-table" />
      </div>}
      <Sidebar
        visible={!!viewedData}
        onClose={handleCloseSidebar}
        title={viewedData ? `WDYN for ${viewedData.program}` : ""}
      >
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </Sidebar>
    </div>
  );
}

export default Wdyn;
