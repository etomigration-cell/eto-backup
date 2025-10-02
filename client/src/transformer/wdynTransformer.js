import moment from "moment";

export function mapWdyn(record) {
  return {
    // Identifiers
    formResponseID: record.formResponseID,
    formIdentifier: record.formIdentifier,
    subjectID: record.subjectID,
    groupID: record.groupID,
    familyID: record.familyID,
    responseSetID: record.responseSetID,
    formID: record.formID,
    collectionTypeID: record.collectionTypeID,
    subjectTypeID: record.subjectTypeID,
    collectionID: record.collectionID,
    dateCompleted: record.responseCreatedDate ? moment(record.responseCreatedDate).format("DD/MM/YYYY") : "",
    programID: record.programID,
    auditStaffID: record.auditStaffID,
    auditDate: record.auditDate ? moment(record.auditDate).format("DD/MM/YYYY") : "",
    dataEnteredByID: record.dataEnteredByID,
    draftSavedOn: record.draftSavedOn ? moment(record.draftSavedOn).format("DD/MM/YYYY") : "",
    removedDate: record.removedDate ? moment(record.removedDate).format("DD/MM/YYYY") : "",

    // Goals & Outcome
    scopeOfGoal: record.scopeOfGoal_15196,
    scopeOfGoal_ResponseChoiceID: record.scopeOfGoal_15196_ResponseChoiceID,
    currentGoalStatus: record.whatIsTheCurrentStatusOfThisGoal_15197,
    currentGoalStatus_ResponseChoiceID: record.whatIsTheCurrentStatusOfThisGoal_15197_ResponseChoiceID,
    otherGoalNotListed: record.otherGoalNotListedAbove_15200,
    comments: record.comments_15201,
    outcomesAtGoalEnd: record.overallOutcomesAtGoalAchievementEndDate_15202,
    dateGoalClosed: record.dateGoalClosed_15203 ? moment(record.dateGoalClosed_15203).format("DD/MM/YYYY") : "",
    motivationForGoal: record.participantLevelOfMotivationForThisGoal_15206,
    motivationForGoal_ResponseChoiceID: record.participantLevelOfMotivationForThisGoal_15206_ResponseChoiceID,
    dontChangeMe: record.dontChangeMe_15216,
    goalLongerTerm: record.goalLongerTerm_15220,
    goalLongerTerm_ResponseChoiceID: record.goalLongerTerm_15220_ResponseChoiceID,
    domain: record.domainChooseOne_15221,
    domain_ResponseChoiceID: record.domainChooseOne_15221_ResponseChoiceID,
    goalCrisis: record.goalCrisis_15222,
    goalCrisis_ResponseChoiceID: record.goalCrisis_15222_ResponseChoiceID,
    isThisGoalFor: record.isthisgoalfor_15243,
    isThisGoalFor_ResponseChoiceID: record.isthisgoalfor_15243_ResponseChoiceID,
    selectedChild: record.youindicatedthatthisisforachildofthisparentPleaseselectthechild_15244,

    // SHS/Service
    shsTypeOfServiceActivity: record.shsTypeOfServiceActivityTxt_15300,
    shsTypeOfServiceActivityNum: record.shsTypeOfServiceActivityNum_16066,

    // Staff & Time
    micahTeam: record.micahTeam_16083,
    selectYourName: record.selectyourname_15404,
    start: record.start_15486 ? moment(record.start_15486).format("DD/MM/YYYY") : "",
    endOptional: record.endoptional_15487 ? moment(record.endoptional_15487).format("DD/MM/YYYY") : "",
    staffTogether: record.howmanystaffdidthistogetherAtmost4_15489,
    select2ndStaffPerson: record.selectthe2ndstaffperson_15491,
    otherTeamAssisted: record.whatotherteamassisted_15492,
    wasPATPersonalVisit: record.wasthisaPATpersonalvisit_15493,
    wasPATPersonalVisit_ResponseChoiceID: record.wasthisaPATpersonalvisit_15493_ResponseChoiceID,
    timeSpentOnBehalfPerStaff: record.timespentonbehalfofparticipantPerstaffmember_15494,
    timeSpentWithParticipantPerStaff: record.timespentwithparticipantPerstaffmember_15496,
    totalTimeSpentOnBehalf: record.totaltimespentonbehalfofparticipant_15497,
    totalTimeSpentTravelling: record.totaltimespenttravelling_15498,
    totalTimeSpentWithParticipant: record.totaltimespentwithparticipant_15499,

    // Contact Details
    contactMethod: record.contactMethod_15501,
    contactMethod_ResponseChoiceID: record.contactMethod_15501_ResponseChoiceID,
    contactLocation: record.contactLocation_15502,
    contactLocation_ResponseChoiceID: record.contactLocation_15502_ResponseChoiceID,
    otherContactLocation: record.ifcontactlocationisotherpleasespecify_15503,
    phoneContactType: record.phoneContactType_15504,
    phoneContactType_ResponseChoiceID: record.phoneContactType_15504_ResponseChoiceID,
    totalEffortTime: record.totalefforttimeforparticipant_15587,

    // Crisis, Housing, Status
    planType: record.planType_16365,
    planType_ResponseChoiceID: record.planType_16365_ResponseChoiceID,
    typeofCrisis: record.typeofCrisis_16587,
    typeofCrisis_ResponseChoiceID: record.typeofCrisis_16587_ResponseChoiceID,
    hasPermanentlyHoused: record.hasthispersonfamilybeenpermanentlyhoused_16951,
    hasPermanentlyHoused_ResponseChoiceID: record.hasthispersonfamilybeenpermanentlyhoused_16951_ResponseChoiceID,
    whatDateWereTheyHoused: record.whatdateweretheyhoused_16952 ? moment(record.whatdateweretheyhoused_16952).format("DD/MM/YYYY") : "",
    throughWhichProvider: record.throughwhichprovider_16954,
    leaseDurationMonths: record.ifaleaseisinplacewhatisthedurationoftheleaseinmonths_16956,
    leaseRenewalDate: record.ifaleaseinplacewhatistherenewaldate_16957 ? moment(record.ifaleaseinplacewhatistherenewaldate_16957).format("DD/MM/YYYY") : "",
    autoRentPayments: record.areautorentpaymentsinplace_16958,
    autoRentPayments_ResponseChoiceID: record.areautorentpaymentsinplace_16958_ResponseChoiceID,

    wdynStatus: record.wdynStatus_23093,
    wdynStatus_ResponseChoiceID: record.wdynStatus_23093_ResponseChoiceID,
    hasEndDate: record.hasEnddate_23283,
    hasEndDate_ResponseChoiceID: record.hasEnddate_23283_ResponseChoiceID,
    whatTypeOfHousing: record.whattypeofhousingisit_28334,
    whatTypeOfHousing_ResponseChoiceID: record.whattypeofhousingisit_28334_ResponseChoiceID,
    sleepingRough: record.istheparticipantfamilysleepingroughatthispresentation_28911,
    sleepingRough_ResponseChoiceID: record.istheparticipantfamilysleepingroughatthispresentation_28911_ResponseChoiceID,

    // Staff
    fName: record.fName,
    lName: record.lName
  };
}



export function transformWdyn(records) {
  const minimalKeys = [
    "formResponseID",
    "dateGoalClosed",
    "wdynStatus",
    "scopeOfGoal",
    "isThisGoalFor",
    "domain",
    "goalLongerTerm",
    "currentGoalStatus"
  ];

  // Map all records to frontend format first
  const mapped = records.map(mapWdyn);

  // Then extract minimal information from mapped records
  const minimal = mapped.map(rec =>
    ({
      ...Object.fromEntries(
        minimalKeys.map(key => [key, rec[key]])
      ),
      StaffName: `${rec.fName || ''} ${rec.lName || ''}`.trim(),
    })
  );

  return {
    minimal,
    full: mapped
  };
}
