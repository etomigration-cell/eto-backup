import React, { useState } from 'react';
import './AddressBook.css';
import { FaEye } from 'react-icons/fa';
import Sidebar from 'components/Sidebar/Sidebar';
import Tabs from 'components/Tabs/Tabs';
import DynamicTable from 'common/DynamicTable/DynamicTable';
import AddressBookDetailView from '../AddressBookDetailView/AddressBookDetailView';

function AddressBook({ addressBook, config, addressBookDetails }) {

  const [viewedData, setViewedData] = useState(null);

  const handleView = (row) => {
    console.log(addressBookDetails)
    setViewedData(addressBookDetails[0]); // or load details via API, then setViewedData(result)
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: 'Summary',
      content: <AddressBookDetailView detail={viewedData} />
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
    <div className="addressbook-panel">
      <div className="panel-header">
        <strong>Address Book</strong>
      </div>
      <div className="panel-section">
        <DynamicTable data={addressBook} config={configWithActions} />
      </div>
      <Sidebar visible={!!viewedData} onClose={handleCloseSidebar} title={viewedData ? `addressbook for ${viewedData.program}` : ''}>
       <Tabs tabs={tabs} />
      </Sidebar>

    </div>
  );
}


export default AddressBook;
