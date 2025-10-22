import React from "react";
import DynamicDetailsTable from "common/DynamicTable/DynamicDetailsTable";
import './AIHWFormDetailView.css';

function AIHWFormPresentingDetailView({ detail }) {
  if (!detail) return null;

  const fieldLabels = {
    
whatReasonsDoesTheParticipantReportForSeekingAssistance_14662 : "What reasons does the participant report for seeking assistance?",
whatOtherReasonsDoesTheParticipantReportForSeekingAssistance_14663:"what Other Reasons Does The Participant Report For Seeking Assistance",
age_14803:"age",

ofTheseReasonsWhichDoesTheParticipantReportAsBeingTheMainReasonForSeekingAssistance_14827 : "Of this reasons, which does the participant report as being the main reason for seeking assistance?",
ifThisParticipantHasACareOrProtectionOrderWhatWereTheCareArrangementsTheWeekBeforePresentingFo_14669 : "If this participant has a care or protection order, what were the care arrangements the Week Before Presenting",
ifThisParticipantHasACareOrProtectionOrderWhatWereTheCareArrangementsWhenPresentingForEachFami_14670 : "If this participant has a care or protection order, what were the care arrangements the When  Presenting",

haveYouBeenInAnyOfTheseInstitutionsOrFacilitiesInTheLast12MonthsforEachFamilyMember_14671 : "Have you been in any of these institutions or facilities in the 12 months",
doYouHaveAPhysicalHealthConditionDiagnosedByAHealthProfessionalMp_14673:"Do You Have a Physical Health Condition Diagnosed By a Health Professional",
otherNotesAboutCareProtectionIssues_14796 : "Other notes about Care & Protection issues",
doYouHaveAMentalHealthConditionDiagnosedByAHealthProfessional_14675 : "Do you have a mental health condition diagnosed by a health professional?",
isThereAnyAdditionalInformationFormalOrInformalThatIndicatesTheClientHasAMentalHealthIssue_14680 : "Was there any additional information, informal or formal, that indicates that this person has a mental health condition?",
overWhatTimePeriodHaveYouReceivedServicesOrAssistanceForYourMentalHealthIssue_14679 : "Over what time period have you received services or assistance for your mental health issue",
istheparticipantcurrentlyreceivinganagreedpackageofsupportthroughtheNationalDisabilityInsuranc_24805 : "Are you currently receiving an agreed package of support through the national disability insurance scheme",
doYouNeedHelpsupervisionWithSelfcareEgShoweringOrBathingDressingOrUndressingToiletingOrEatingF_14704 : "Do you need help/supervision with self-care(e.g showering or bathing, dressing or undressing, toileting, or eating food)?",
doYouNeedHelpsupervisionWithMobilityEgMovingAroundTheHouseGettingInAndOutOfAChair_14705 : "Do you need help/supervision with mobility(e.g moving around the house, getting in and out of chair)?",
doYouNeedHelpsupervisionWithCommunicationEgUnderstandingOrBeingUnderstoodByOtherPeopleIncludin_14706 : "Do you need help/supervision with communication(e.g understanding or being understood by other people, including people you know)?",
labourForceStatus_14716 : "If the participant is aged 15 or older, what is their Labour Force status?",
ifTheParticipantIs15yrsWhatIsTheirEmploymentStatus_14711 :"If the participant is employed - what is their employment status?",
ifTheParticipantIs15yrsWhatIsTheirEmploymentStatus_14717 :"If the participant is employed - what is their employment status?",
mainSourceOfIncome_14718 :"Main Source of income",
mainSourceOfIncome_14712 :"Main Source of income",
isTheParticipantCurrentlyRegisteredForAGovernmentBenefitPensionOrAllowanceButAwaitingYourFirst_14719: "Is the participant currently registered for a government benefit, pension or allowance but awaiting the first payment?",
isTheParticipantCurrentlyRegisteredForAGovernmentBenefitPensionOrAllowanceButAwaitingYourFirst_14713 : "Is the participant currently registered for a government benefit, pension or allowance but awaiting the first payment?",
isTheParticipantUndertakingFormalStudyOrTrainingEgSchoolUniversityVocationalStudiesSuchAsTafe_14720 :"Is the participant undertaking formal study or training(e.g school, university, vocational studies such as TAFE)?",
isTheParticipantUndertakingFormalStudyOrTrainingEgSchoolUniversityVocationalStudiesSuchAsTafe_14714 : "Is the participant undertaking formal study or training(e.g school, university, vocational studies such as TAFE)?",
whatTypeOfEducationtrainingIsTheParticipantEnrolledIn_14722 : "What type of education/training is the participant enrolled in ?",
whatTypeOfEducationtrainingIsTheParticipantEnrolledIn_14715 : "What type of education/training is the participant enrolled in ?",
whatWasTheSchoolEnrolmentAndAttendanceStatusOnPresentation_14847 : "What was the school enrolment and attendance status on presentation?",
episodeOfHomelessness_14731 : "Episode of homelessness -in a month presenting",
labourForceStatus_14710:"If the participant is aged 15 or older, what is their Labour Force status?",
episodeOfHomelessness_14734 : "Episode of homelessness -12 mnth before",
howLongSinceYouHadThisPermanentPlaceToLive_14737 : "How long since you had this permanent place to live",

whatWasTheSuburblocalityOfYourMostRecentPermanentPlaceToLive_14738 : "What was the suburb/locally of your most recent permanent place to live?",
whatwasthepostcodewhereyouresidedlastweekt_20363 : "What was the suburb where you resided last week?",
livingArrangements_14756 : "Living Arrangements",
tenure_14761 : "Tenure",
conditionsOfOccupancy_14757 :"Conditions of occupancy",
dwellingType_14758 : "Dwelling type",
livingArrangements_14759 : "living arrangements",
tenure_14754 : "Tenure",
conditionsOfOccupancy_14760 : "Conditions of Occupancy",
dwellingType_14755 : "Dwelling type",
otherNotesAboutHousingIssues_14798 : "Other notes about housing issues",
  };

return (
  <div className="AIHWFormDetailView-detail">
    <DynamicDetailsTable
      detail={detail}
      columnsPerRow={1} // or any other number
      fieldLabels={fieldLabels}
    />
  </div>
  );
}


export default AIHWFormPresentingDetailView;