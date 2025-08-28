import React, { useState } from 'react';
import './SupportPeriod.css'; // For styling

function SupportPeriods({ supportPeriods }) {
  return (
    <div className="support-periods-panel">
      <div className="panel-header">
        <strong>Support Periods</strong>
      </div>
      <div className="panel-section">
        <table className="support-periods-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>Subject Type</th>
              <th>Date Last Updated</th>
              <th>Audit Creation Date</th>
              <th>Last Updated By</th>
              <th>Micah Team</th>
              <th>AIHW/SHS</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {supportPeriods.map(row => (
              <tr key={row.id}>
                <td>{row.program}</td>
                <td>{row.subjectType}</td>
                <td>{row.dateLastUpdated}</td>
                <td>{row.auditCreationDate}</td>
                <td>{row.lastUpdatedBy}</td>
                <td>{row.micahTeam}</td>
                <td>{row.aihwshs}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupportPeriods;