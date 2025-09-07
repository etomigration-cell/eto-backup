import React from "react";
import "./ParticipantAuditReport.css";

function ParticipantAuditReport({ auditReport }) {
  console.log(auditReport);
  if (!auditReport) {
    return (
      <div className="empty-audit-report">
        No audit report available for this participant.
      </div>
    );
  }

  return (
    <div className="audit-report-wrapper">
      <h3>Audit Report for {auditReport.name}</h3>
      <table className="audit-report-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Old Value</th>
            <th>New Value</th>
            <th>Audit Date</th>
          </tr>
        </thead>
        <tbody>
          {auditReport.auditItems.map((item, idx) => (
            <tr key={idx}>
              <td>{item.field}</td>
              <td>{item.oldValue || "-"}</td>
              <td>{item.newValue}</td>
              <td>{item.auditDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="audit-meta">
        <span>
          <strong>Program:</strong> {auditReport.program}
        </span>
        <span>
          <strong>Modified By:</strong> {auditReport.modifiedBy}
        </span>
        <span>
          <strong>Date Modified:</strong> {auditReport.dateModified}
        </span>
      </div>
    </div>
  );
}

export default ParticipantAuditReport;
