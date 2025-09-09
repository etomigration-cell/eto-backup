import React from "react";
import "./ParticipantDetailView.css";

function ParticipantDetailView({ participant, participantId }) {
  if (!participant) {
    return <div className="empty-info">Participant not found.</div>;
  }

  // List of fields to display, with human-friendly labels
  const fields = [
    { label: "First Name", key: "firstName" },
    { label: "Middle Name", key: "middleName" },
    { label: "Last Name", key: "lastName" },
    { label: "Alias", key: "alias" },
    { label: "Case Number", key: "caseNumber" },
    { label: "Status", key: "realOrFake" },
    { label: "Date of Birth", key: "DOB" },
    { label: "DOB Accuracy", key: "dobAccuracy" },
    { label: "CRN", key: "CRN" },
    { label: "SRSID", key: "SRSID" },
    { label: "Sex", key: "sex" },
    { label: "Gender", key: "gender" },
    { label: "Sexual Identity", key: "sexualIdentity" },
    { label: "Sexual Identity Other", key: "sexualIdentityOther" },
    {
      label: "Aboriginal/Torres Strait Islander",
      key: "aboriginalTorresStraitIslander",
    },
    { label: "South Sea Islander", key: "southSeaIslander" },
    { label: "CALD", key: "CALD" },
    { label: "Citizenship Status", key: "citizenshipStatus" },
    { label: "Country of Birth", key: "countryOfBirth" },
    { label: "Year of Arrival", key: "yearOfArrival" },
    { label: "ADF Member", key: "adfMember" },
    { label: "Medicare Number", key: "medicareNumber" },
    { label: "Medicare Individual ID", key: "medicareIndividualId" },
    { label: "Aged Care ID", key: "agedCareId" },
    { label: "NDIS Number", key: "ndisNumber" },
    { label: "Disability", key: "disability" },
    { label: "Primary Disability Group", key: "primaryDisabilityGroup" },
    { label: "Needs Help/Supervision", key: "needsHelpOrSupervision" },
    { label: "Date of Death", key: "dateOfDeath" },
    { label: "Email", key: "email" },
    { label: "Program Start", key: "ProgramStartDate" },
    { label: "Initial Contact Type", key: "initialContactType" },
    { label: "Referral Source MP", key: "referralSourceMP" },
    { label: "Date of First Micah Contact", key: "dateOfFirstMicahContact" },
    { label: "Communication Method", key: "communicationMethod" },
    { label: "Interpreter Required", key: "interpreterRequired" },
    {
      label: "Spoken Language (Other Than English)",
      key: "spokenLanguageOtherThanEnglish",
    },
    { label: "Non-Spoken Language", key: "nonSpokenLanguage" },
    { label: "Non-Spoken Other", key: "nonSpokenOther" },
  ];

  return (
    <div className="participant-details-card">
      <div className="details-header">
        <div>
          <h2>{participant.name}</h2>
          {participant.email && (
            <div className="email">{participant.email}</div>
          )}
        </div>
      </div>
      <table className="participant-details-table">
        <tbody>
          {fields.map(({ label, key }) =>
            participant[key] ? (
              <tr key={key}>
                <td className="label">{label}</td>
                <td className="value">{participant[key]}</td>
              </tr>
            ) : null,
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ParticipantDetailView;
