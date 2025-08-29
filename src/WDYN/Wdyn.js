import React from "react";
import './Wdyn.css';

function Wdyn({ wdyn }) {
  if (!wdyn) return <div>No participant info available.</div>;

  return (
     <div className="support-periods-panel">
      <div className="panel-header">
        <strong>What do you need?</strong>
      </div>
      <div className="panel-section">
        <table className="support-periods-table">
          <thead>
            <tr>
              
              <th>Dashboard</th>
              <th>Date Last Updated</th>
              <th>Last Updated By</th>
              <th>Goal Status</th>
              <th>Scope</th>
              <th>Is For</th>
              <th>Domain</th>
              <th>Goal - LT</th>
              <th>Goal - Crisis</th>
              <th>Other Goal</th>
              <th>Current Goal Status</th>             
            </tr>
          </thead>
          <tbody>
            {wdyn.map(row => (
              <tr key={row.wdynid}>
                <td>{row.dashboard}</td>
                <td>{row.dateLastUpdated}</td>
                <td>{row.lastUpdatedby}</td>
                <td>{row.goalStatus}</td>
                <td>{row.scope}</td>
                <td>{row.isfor}</td>                
                <td>{row.domain}</td>
                <td>{row.goalLT}</td>
                <td>{row.goalCrisis}</td>
                <td>{row.othergoal}</td>
                <td>{row.currentgoalstatus}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wdyn;
