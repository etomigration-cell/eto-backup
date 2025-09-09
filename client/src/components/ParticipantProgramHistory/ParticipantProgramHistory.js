import React from "react";
import "./ParticipantProgramHistory.css";

function ProgramHistory({ history }) {
  if (!history) {
    return (
      <div className="empty-history">
        No program history available for this participant.
      </div>
    );
  }

  return (
    <div className="program-history-table-wrapper">
      <h3>Program History</h3>
      <table className="program-history-table">
        <thead>
          <tr>
            <th>Program</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Projected End</th>
            <th>Days</th>
            <th>Dismissal Reason</th>
            <th>Staff</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{history.program}</td>
            <td>{history.enrollmentStatus}</td>
            <td>{history.programStartDate}</td>
            <td>{history.programEndDate || "-"}</td>
            <td>{history.projectedEndDate || "-"}</td>
            <td>{history.daysInProgram}</td>
            <td>{history.reasonForDismissal || "-"}</td>
            <td>{history.staff}</td>
            <td>
              <button onClick={() => alert("Edit not implemented")}>
                Edit
              </button>
              <button onClick={() => alert("Delete not implemented")}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProgramHistory;
