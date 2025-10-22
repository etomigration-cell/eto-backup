import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './MSUDetailView.css';

function MSUMCQDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
   micahTeam_16473 : "Micah Team",
	submitsSHSAIHWreports_21833 : "Submits SHS AIHW Reports",
	doyouhaveanappointedsubstitutedecisionmakermp_16498 : "Does the participant or family have an appointed substitute-maker?",
	doyouhaveanappointedsubstitutedecisionmakermp_16498_ResponseChoiceID : "At Intake, 'Does the participant have an appointed substitute decision-maker?' was answered as",
	doesThePublicTrusteeAdministerTheParticipantsPersonalFinancesMp_16420: "Does the Public Trustee administer the participant's or family's personal finances?",
  doesThePublicTrusteeAdministerTheParticipantsPersonalFinancesMp_16420_ResponseChoiceID: "At Intake, 'Public Trustee' was answered as:",
  ifTheParticipantIsUnderTheAgeOf18AndHasACareOrProtectionOrderWhatWereTheirCareArrangements_16394: "If the participant is under the age of 18 and has a care or protection order, what were their care arrangements?",
  ifTheParticipantIsUnderTheAgeOf18AndHasACareOrProtectionOrderWhatWereTheirCareArrangements_16394_ResponseChoiceID:"At Intake, 'Care Arrangements' was answered as.",
};

return (
  <div className="MSUDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={2} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default MSUMCQDetailView;