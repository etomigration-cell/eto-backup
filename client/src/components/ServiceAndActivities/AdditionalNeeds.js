import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './SupportPeriodDetailView.css';

function AdditionalNeeds({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
    programName: "Program Name",
    subjectType: "Subject Type",
    startDate: "What is the start date of Support Period",
    endDate: "Support Period End Date",
    auditDate: "Audit Date",
    dateLastUpdated: "Date Last Updated",
    firstName: "First Name",
    lastName: "Last Name",
    submitsReport: "Submits SHS AIHW Reports",
    micahTeam: "Entity Name",
    submitAIHWReports: "Submit AIHW Reports",
    aihwOrganisationId: "AIHW Organisation ID",
    dateAssistanceRequested: "Date Assistance Requested",
    participantSpeaksLanguageOtherThanEnglishAtHome: "Speaks Language Other Than English At Home",
    languageSpokenAtHome: "Language Spoken At Home (Choice)",
    englishProficiency: "Self-Assessed English Proficiency",
    formalReferralType: "Source of Formal Referral",
    receivedServiceFromTeamInPast: "Received Services From Team In Past",
    genderFromDemographics: "Gender (Demographics)",
    aihwSex: "AIHW Gender",
    housingAtTheCloseOfSupportPeriod: "Housing At End Of Support Period",
    selectTheReasonThatTheSupportPeriodEnded: "Reason Support Period Ended",
    wasthecarefinderclientfeedbacksurveyofferred: "Carefinder Client Feedback Survey Offered"
  };

return (
  <div className="support-period-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default AdditionalNeeds;
