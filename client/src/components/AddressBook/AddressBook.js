import React, { useState, useEffect } from "react";
import './AddressBook.css';
import { FaEye } from 'react-icons/fa';
import Sidebar from 'components/Sidebar/Sidebar';
import Tabs from 'components/Tabs/Tabs';
import DynamicTable from 'common/DynamicTable/DynamicTable';
import AddressDetails from "./AddressDetails";
import PhoneNumberAndEmail from "./PhoneNumberAndEmail";
import { fetchAddressBook } from 'actions/AddressBookAction/AddressBookAction';
import Spinner from "common/Spinner/Spinner";

function AddressBook({ participant, config, programCode }) {
  const [ addressBook, setAddressBook ] = useState([]);
  const [ addressBookDetails, setAddressBookDetails ] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [ viewedData, setViewedData] = useState(null);
  const [ loading, setLoading] = useState(false);

  useEffect(() => {
      async function getAddressBook() {
        try {
          setLoading(true);
          const result = await fetchAddressBook(params);
          console.log(result);
          setAddressBook(result);
          setAddressBookDetails(result.full);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching family members:", error);
        }
      }

      const params = new URLSearchParams({
      id: participant.clid,
      programCode: programCode
      });
  
      if (participant.clid) {
        getAddressBook(params);
      }
    }, [participant.clid]);

  const handleView = (row) => {
    console.log("row-id", row.formResponseID);
    //console.log(supportPeriodDetails.find( suppDetails => suppDetails.id === row.id));
    setViewedData(addressBookDetails.find( addressBook => addressBook.formResponseID === row.formResponseID));
  };

  const handleCloseSidebar = () => setViewedData(null);

  const tabs = [
    {
      label: 'Address Details',
      content: <AddressDetails detail={viewedData} />
    },
    {
      label: 'Phone Numbers and email',
      content: <PhoneNumberAndEmail detail={viewedData} />
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
       {!loading &&  <strong>Address Book</strong> }
      </div>
       {loading && <Spinner />}
      {!loading &&  <div className="address-table-wrapper">
        <DynamicTable data={addressBook.minimal || []} config={configWithActions} className="address-book-table" />
      </div> }
      <Sidebar visible={!!viewedData} onClose={handleCloseSidebar} title={viewedData ? `Addressbook for ${participant.fName} ${participant.lName}` : ''}>
       <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}/>
      </Sidebar>
    </div>
  );
}


export default AddressBook;
