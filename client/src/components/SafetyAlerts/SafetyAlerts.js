import React from "react";
import "./SafetyAlerts.css";

function SaftyAlerts({ saftyalerts }) {
  if (!saftyalerts) return <div>No Safty Alerts info available.</div>;

  return (
    <div className="saftyalerts-panel">
      <div className="panel-header">
        <strong>Consent</strong>
      </div>
      <div className="panel-section">
        <table className="saftyalerts-table">
          <thead>
            <tr>
              <th>Date Last Updated</th>
              <th>Micah Team</th>
              <th>External Risk</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {saftyalerts.map((row) => (
              <tr key={row.saftyalertsid}>
                <td>{row.dateLastUpdated}</td>
                <td>{row.micahTeam}</td>
                <td>{row.externalRisk}</td>
                <td>{row.category}</td>
                <td>{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SaftyAlerts;
