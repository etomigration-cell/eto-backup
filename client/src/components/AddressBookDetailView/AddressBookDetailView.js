import React from 'react';

function AddressBookDetailView({ detail }) {
  if (!detail) return null;
  return (
    <div className="details-vertical-list">
      <div>
    <span className="details-label">Program:</span>
    <span className="details-value">{detail.program}</span>
  </div>
  <div>
    <span className="details-label">Date:</span>
    <span className="details-value">{detail.date}</span>
  </div>
  <div>
    <span className="details-label">Micah Team:</span>
    <span className="details-value">{detail.micahTeam}</span>
  </div>
  <div>
    <span className="details-label">AIHW Submission:</span>
    <span className="details-value">{detail.aihwSubmission}</span>
  </div>
  <div>
    <span className="details-label">Organisation ID:</span>
    <span className="details-value">{detail.aihwOrganizationId}</span>
  </div>
  <div>
    <span className="details-label">Families Crisis:</span>
    <span className="details-value">{detail.familiesCrisis ? "Yes" : "No"}</span>
  </div>
  <div>
    <span className="details-label">Date Assistance Requested:</span>
    <span className="details-value">{detail.dateAssistanceRequested}</span>
  </div>
  <div>
    <span className="details-label">Support Period Start:</span>
    <span className="details-value">{detail.supportPeriodStartDate}</span>
  </div>
  <div>
    <span className="details-label">Speaks Other Language at Home:</span>
    <span className="details-value">{detail.participantSpeaksLanguageOtherThanEnglishAtHome}</span>
  </div>
  <div>
    <span className="details-label">Language at Home:</span>
    <span className="details-value">{detail.languageSpokenAtHome}</span>
  </div>
  <div>
    <span className="details-label">English Proficiency:</span>
    <span className="details-value">{detail.englishProficiency}</span>
  </div>
  <div>
    <span className="details-label">Referral Type:</span>
    <span className="details-value">{detail.formalReferralType}</span>
  </div>
  <div>
    <span className="details-label">Received Service:</span>
    <span className="details-value">{detail.receivedServiceFromTeamInPast ?? "Not specified"}</span>
  </div>
    </div>
  );
}

export default AddressBookDetailView;
