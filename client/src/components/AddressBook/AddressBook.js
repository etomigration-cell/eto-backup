import React, { useState } from 'react';
import './AddressBook.css';
import { FaEye } from 'react-icons/fa';
import Sidebar from 'components/Sidebar/Sidebar';
import Tabs from 'components/Tabs/Tabs';
import DynamicTable from 'components/DynamicTable/DynamicTable';
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







  // if (!addressBook) return <div>No Address Book info available.</div>;

  // return (
  //    <div className="addressbook-panel">
  //     <div className="panel-header">
  //       <strong>Address Book</strong>
  //     </div>
  //     <div className="panel-section">
  //       <table className="addressbook-table">
  //         <thead>
  //           <tr>
              
  //             <th>Date Last Updated</th>
  //             <th>Status</th>
  //             <th>Who is this</th>
  //             <th>Name</th>
  //             <th>Type</th>
  //             <th>Accommodation</th>
  //             <th>Apt/Unit</th>
  //             <th>Street No</th>
  //             <th>Street Name</th>
  //             <th>Suburb & Post Code</th>
  //             <th>Key</th>
  //             <th>Mobile</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {addressBook.map(row => (
  //             <tr key={row.addressid}>
  //               <td>{row.dateLastUpdated}</td>
  //               <td>{row.status}</td>
  //               <td>{row.whoisthis}</td>
  //               <td>{row.name}</td>
  //               <td>{row.type}</td>
  //               <td>{row.accommodation}</td>                
  //               <td>{row.aptunit}</td>
  //               <td>{row.streetNo}</td>
  //               <td>{row.streetName}</td>
  //               <td>{row.suburbandpostCode}</td>
  //               <td>{row.key}</td>
  //               <td>{row.mobile}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );
//}

export default AddressBook;