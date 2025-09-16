import React from "react";

function SupportPeriodDetailView({ detail }) {
  if (!detail) return null;
  return (
    <div className="details-vertical-list">
      <div>
        <span className="details-label">Program:</span>
        <span className="details-value">{detail.programID}</span>
      </div>
      <div>
        <span className="details-label">Date:</span>
        <span className="details-value">{detail.auditDate}</span>
      </div>
      <div>
        <span className="details-label">Micah Team:</span>
        <span className="details-value">{detail.micahTeam_16790}</span>
      </div>
      <div>
        <span className="details-label">AIHW Submission:</span>
        <span className="details-value">{detail.submitsSHSAIHWreports_16795}</span>
      </div>
      <div>
        <span className="details-label">Organisation ID:</span>
        <span className="details-value">{detail.aihwOrganisationID_16875}</span>
      </div>
      <div>
        <span className="details-label">Families Crisis:</span>
        <span className="details-value">{detail.aihwOrgAgencyName_21813 === "Families Crisis" ? "Yes" : "No"}</span>
      </div>
      <div>
        <span className="details-label">Date Assistance Requested:</span>
        <span className="details-value">{detail.onwhatdatewasassistanceoriginallyrequested_20036}</span>
      </div>
      <div>
        <span className="details-label">Support Period Start:</span>
        <span className="details-value">{detail.whatIsTheStartDateOfTheSupportPeriod_16787}</span>
      </div>
      <div>
        <span className="details-label">Speaks Other Language at Home:</span>
        <span className="details-value">{detail.doestheParticipantspeakalanguageotherthanEnglishathome_24803}</span>
      </div>
      <div>
        <span className="details-label">Language at Home:</span>
        <span className="details-value">{detail.doestheParticipantspeakalanguageotherthanEnglishathome_24803_ResponseChoiceID}</span>
      </div>
      <div>
        <span className="details-label">English Proficiency:</span>
        <span className="details-value">{detail.whatistheparticipantsselfassessedEnglishproficiency_24801}</span>
      </div>
      <div>
        <span className="details-label">Referral Type:</span>
        <span className="details-value">{detail.whatwastheparticipantssourceofformalreferraltothisagency_16876}</span>
      </div>
      <div>
        <span className="details-label">Received Service:</span>
        <span className="details-value">{detail.hasthispersonfamilyreceivedservicesfromthisteaminthepastRecordedeitherinSRSETOorother_22184 ?? "Not specified"}</span>
      </div>
    </div>
  );
}

export default SupportPeriodDetailView;
