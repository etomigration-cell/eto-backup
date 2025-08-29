import React from "react";
import './AddressBook.css';

function AddressBook({ addressBook }) {
  if (!addressBook) return <div>No participant info available.</div>;

  return (
     <div className="support-periods-panel">
      <div className="panel-header">
        <strong>Address Book</strong>
      </div>
      <div className="panel-section">
        <table className="support-periods-table">
          <thead>
            <tr>
              
              <th>Date Last Updated</th>
              <th>Status</th>
              <th>Who is this</th>
              <th>Name</th>
              <th>Type</th>
              <th>Accommodation</th>
              <th>Apt/Unit</th>
              <th>Street No</th>
              <th>Street Name</th>
              <th>Suburb & Post Code</th>
              <th>Key</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {addressBook.map(row => (
              <tr key={row.addressid}>
                <td>{row.dateLastUpdated}</td>
                <td>{row.status}</td>
                <td>{row.whoisthis}</td>
                <td>{row.name}</td>
                <td>{row.type}</td>
                <td>{row.accommodation}</td>                
                <td>{row.aptunit}</td>
                <td>{row.streetNo}</td>
                <td>{row.streetName}</td>
                <td>{row.suburbandpostCode}</td>
                <td>{row.key}</td>
                <td>{row.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddressBook;
