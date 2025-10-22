import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './MSUDetailView.css';

function MSUDetailView({ detail }) {
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
  episodeOfHomelessness_16393:"Episode of homelessness",
  atIntakeThisHomelessnessQuestionWasAnsweredAs_16478 :"At Intake, 'Episode of homelessness' was answered as",
  livingArrangements_16395:"Living Arrangements",
  atIntakeLivingArrangementsWasAnsweredAs_16481:"At Intake, 'Living Arrangements' was answered as ",
  tenure_16402:"Tenure",
  atIntakeTenureWasAnsweredAs_16483_DisplayStr:"At Intake, 'Tenure' was answered as ",
  conditionsOfOccupancy_16396:"Conditions Of Occupancy",
  atIntakeConditionOfOccupancyWasAnsweredAs_16484:"At Intake 'Conditions of occupancy' was answered as",
  dwellingType_16392:"Dwelling Type",
  atIntakeDwellingTypeWasAnsweredAs_16482:"At Intake 'Dwelling Type' was answered as",
  labourForceStatus_16397:"If the participant is aged 15 or older, what is their Labour Force status?",
  atIntakeLabourForceStatusWasAnsweredAs_16485:"At Intake 'Labour Force status' was answered as",
  ifTheParticipantIs15yrsWhatIsTheirEmploymentStatus_16398:"If the participant is employed - what is their employment status?",
  atIntakeEmploymentStatusWasAnsweredAs_16486:"At Intake 'employment status' was answered as",
  mainSourceOfIncome_16399:"Main Source Of Income",
  atIntakeMainSourceOfIncomeWasAnsweredAs_16487:"At Intake 'Main source of income' was answered as",
  isTheParticipantCurrentlyRegisteredForAGovernmentBenefitPensionOrAllowanceButAwaitingTheFirstP_16400:"Is the participant currently registered for a government benefit, pension or allowance, but awaiting the first payment?",
  atIntakeCurrentlyRegisteredAndAwaitingFirstPaymentWasAnsweredAs_16488:"At Intake, 'currently registered and awaiting first payment 'was answered as",
  isTheParticipantUndertakingFormalStudyOrTrainingEgSchoolUniversityVocationalStudiesSuchAsTafe_16401:"Is the participant undertaking formal study or training (e.g., school, university, vocational students such as TAFE)?",
  atIntakeUndertakingFormalTrainingWasAnsweredAs_16489:"At Intake, 'undertaking formal training' was answered as",
  participantAge_29347:"Participant Age",
  whatTypeOfEducationtrainingIsTheParticipantEnrolledIn_16426:"What type of education/training is the participant enrolled in?",
  atIntakeEnrolledEducationtrainingWasAnsweredAs_16490:"At Intake, 'enrolled education/training' was answered as",
  selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500:"Select the goal (open or closed) which most reflects the progress of the support management plan in the past month, (if there were no applicable goals for the month, leave this blank.)",
  wasthereacasemanagementplanfortheparticipant_16504:"was there a case management plan for the participant?",
  youindicatedthattherearenocurrentopengoalsforthisparticipantIndicatereason_16501:"If there are no current, open goals for this participant, nor goals closed in the past month, indicate reason",
  selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500:"Thinking about the goal you selected, and other goals, to what extent the participants management plan goals achieved this month?",
  howmanystaffdidthistogetherAtmost4_23289:"how many staff did this together?",
  timespentonbehalfofparticipantPerstaffmember_23288:"Time Spent on behalf of participant",

  selectYourName_16475:"signed by person/family"



};

return (
  <div className="MSUDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default MSUDetailView;