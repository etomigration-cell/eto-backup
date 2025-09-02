import React from "react";
import './ParticipantInformation.css';

function ParticipantInformation({ participant }) {
  if (!participant) return <div>No participant info available.</div>;

  return (
    <div className="participant-info">
      <h2>Participant Information</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>ID</strong></td>
            <td>{participant.id}</td>
          </tr>
          <tr>
            <td><strong>First Name</strong></td>
            <td>{participant.firstName}</td>
          </tr>
          <tr>
            <td><strong>Last Name</strong></td>
            <td>{participant.lastName}</td>
          </tr>
          <tr>
            <td><strong>Case Number</strong></td>
            <td>{participant.caseNumber}</td>
          </tr>
          <tr>
            <td><strong>Date of Birth</strong></td>
            <td>{participant.DOB}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>{participant.email}</td>
          </tr>
          <tr>
            <td><strong>Alias</strong></td>
            <td>{participant.Alias}</td>
          </tr>
          <tr>
            <td><strong>Real or Fake</strong></td>
            <td>{participant.RealOrFake}</td>
          </tr>
          <tr>
            <td><strong>Program Start Date</strong></td>
            <td>{participant.ProgramStartDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ParticipantInformation;
