import React, { useState, useEffect } from "react";
import './AddressBook.css';
import { FaEye } from 'react-icons/fa';
import Sidebar from 'components/Sidebar/Sidebar';
import Tabs from 'components/Tabs/Tabs';
import DynamicTable from 'common/DynamicTable/DynamicTable';
import AddressBookDetailView from '../AddressBookDetailView/AddressBookDetailView';
import { fetchAddressBook } from 'actions/AddressBookAction/AddressBookAction';
import Spinner from "common/Spinner/Spinner";

function AddressBook({ participant, config }) {
  const [ addressBook, setAddressBook ] = useState([]);
  const [ addressBookDetails, setAddressBookDetails ] = useState([]);
  const [viewedData, setViewedData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      async function getAddressBook() {
        try {
          setLoading(true);
          const result = await fetchAddressBook(participant.clid);
          console.log(result);
          setAddressBook(result);
          setAddressBookDetails(result.full);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching family members:", error);
        }
      }
  
      if (participant.clid) {
        getAddressBook();
      }
    }, [participant.clid]);

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
       {loading && <Spinner />}
      {!loading &&  <div className="address-table-wrapper">
        <DynamicTable data={addressBook.minimal || []} config={configWithActions} className="address-book-table" />
      </div> }
      <Sidebar visible={!!viewedData} onClose={handleCloseSidebar} title={viewedData ? `addressbook for ${viewedData.program}` : ''}>
       <Tabs tabs={tabs} />
      </Sidebar>
    </div>
  );
}


export default AddressBook;
