import React from "react";
import './Consent.css';

function Consent({ consent }) {
  if (!consent) return <div>No participant info available.</div>;

  return (
     <div className="support-periods-panel">
      <div className="panel-header">
        <strong>Consent</strong>
      </div>
      <div className="panel-section">
        <table className="support-periods-table">
          <thead>
            <tr>
              
              <th>Program</th>
              <th>Date Completed</th>
              <th>Last Updated By</th>
              <th>Status</th>
              <th>Date Participant Signed</th>
                      
            </tr>
          </thead>
          <tbody>
            {consent.map(row => (
              <tr key={row.consentid}>
                <td>{row.program}</td>
                <td>{row.dateCompleted}</td>
                <td>{row.lastUpdatedby}</td>
                <td>{row.status}</td>
                <td>{row.dateParticipantSigned}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Consent;
