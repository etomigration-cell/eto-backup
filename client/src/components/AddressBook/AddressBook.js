import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import DynamicTable from 'components/DynamicTable/DynamicTable';
import Sidebar from 'components/Sidebar/Sidebar';
import Tabs from 'components/Tabs/Tabs';
import SupportPeriodDetailView from 'components/SupportPeriodDetailView/SupportPeriodDetailView';
import './SupportPeriod.css';


function AddressBook({ supportPeriods, config, supportPeriodsDetails }) {
  const [viewedData, setViewedData] = useState(null);

  const handleView = (row) => {
    console.log(supportPeriodsDetails)
    setViewedData(supportPeriodsDetails[0]); // or load details via API, then setViewedData(result)
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: 'Summary',
      content: <SupportPeriodDetailView detail={viewedData} />
    },
    {
      label: 'Other Info',
      content: <div>Other tab content or component here</div>
    },
  ];

  const configWithActions = {
    ...config,
    columns: config.columns.map(col =>
      col.key === 'actions'
        ? {
            ...col,
            render: (row) => (
              <button
                title="View"
                onClick={() => handleView(row)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem'
                }}
              >
                <FaEye size={20} color="currentColor" />
              </button>
            )
          }
        : col
    )
  };

  return (
    <div className="support-periods-panel">
      <div className="panel-header">
        <strong>Support Periods</strong>
      </div>
      <div className="panel-section">
        <DynamicTable data={supportPeriods} config={configWithActions} />
      </div>
      <Sidebar visible={!!viewedData} onClose={handleCloseSidebar} title={viewedData ? `Support Period for ${viewedData.program}` : ''}>
       <Tabs tabs={tabs} />
      </Sidebar>

    </div>
  );
}

export default AddressBook;
