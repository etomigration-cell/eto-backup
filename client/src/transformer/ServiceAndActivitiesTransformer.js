import moment from "moment";

/**
 * Map all service activity record fields for full detail view.
 */
export function mapServiceActivities(record) {
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
    programName: record.programName,
    dataEnteredByID: record.dataEnteredByID,
    draftSavedOn: record.draftSavedOn ? moment(record.draftSavedOn).format("DD/MM/YYYY") : "",
    removedDate: record.removedDate ? moment(record.removedDate).format("DD/MM/YYYY") : "",
    
    // SHS and notes
    shsGeneralAssistanceAndSupportActivities_16201: record.shsGeneralAssistanceAndSupportActivities_16201,
    shsGeneralAssistanceAndSupportActivities_16201_ResponseChoiceID: record.shsGeneralAssistanceAndSupportActivities_16201_ResponseChoiceID,
    notes: record.notes_16203,

    // Visit/Contact details
    visitSite_16219: record.visitSite_16219,
    visitSite_16219_ResponseChoiceID: record.visitSite_16219_ResponseChoiceID,
    presentingReason: record.presentingReason_16220,
    inclusiveHealthReferralSource: record.inclusiveHealthReferralSource_16221,
    postcodeOfServiceDelivery: record.postcodeOfServiceDelivery_16230,

    // Episode outcome
    episodeOfCareOutcome: record.episodeOfCareOutcome_16231,
    episodeOfCareOutcome_16231_ResponseChoiceID: record.episodeOfCareOutcome_16231_ResponseChoiceID,

    // Accommodation
    accommodationStartDate: record.accommodationStartDate_16236 ? moment(record.accommodationStartDate_16236).format("DD/MM/YYYY") : "",
    accommodationProvider: record.accommodationProvider_16237,
    accommodationExitDate: record.accommodationExitDate_16238 ? moment(record.accommodationExitDate_16238).format("DD/MM/YYYY") : "",
    numberNights: record.numberNights_16239,

    // Family/contact
    wasFamilyPresent: record.wasTheParticipantFamilyPresentDuringThisActivityAnswerYesIfConversingWithParticipantFamilyOnPh_16241,
    wasFamilyPresent_ResponseChoiceID: record.wasTheParticipantFamilyPresentDuringThisActivityAnswerYesIfConversingWithParticipantFamilyOnPh_16241_ResponseChoiceID,
    contactMethod: record.contactMethod_16242,
    contactMethod_ResponseChoiceID: record.contactMethod_16242_ResponseChoiceID,
    contactLocation: record.contactLocation_16243,
    contactLocation_ResponseChoiceID: record.contactLocation_16243_ResponseChoiceID,

    // Needs/support/service
    housingAccommodationSHS: record.housingaccommodationShs_16262,
    housingAccommodationSHS_ResponseChoiceID: record.housingaccommodationShs_16262_ResponseChoiceID,
    withWhichProviderLiaised: record.withWhichProviderDidYouLiaiseCoordinateOrAdvocate_16263,
    needsIdentifiedHousing: record.needsIdentifiedHousingaccommodation_16267,
    needsIdentifiedHousing_ResponseChoiceID: record.needsIdentifiedHousingaccommodation_16267_ResponseChoiceID,
    needsIdentifiedGeneralAssistanceAndSupport: record.needsIdentifiedGeneralAssistanceAndSupport_16268,
    needsIdentifiedGeneralAssistanceAndSupport_ResponseChoiceID: record.needsIdentifiedGeneralAssistanceAndSupport_16268_ResponseChoiceID,
    needsIdentifiedSpecialisedServices: record.needsIdentifiedSpecialisedServices_16269,
    needsIdentifiedSpecialisedServices_ResponseChoiceID: record.needsIdentifiedSpecialisedServices_16269_ResponseChoiceID,

    // Micah team & times
    micahTeam: record.entityName,
    startTime: record.start_16282,
    endTime: record.endOptional_16283,
    howManyStaffDidThisTogether: record.howManyStaffDidThisTogetherAtMost4_16284,
    selectThe2ndStaffPerson: record.selectThe2ndStaffPerson_16285,

    // Staff and participant goals & effort
    whatOtherTeamAssisted: record.whatOtherTeamAssisted_16352,
    timespentWithParticipant: record.timespentwithparticipantPerstaffmember_16356,
    timespentOnBehalf: record.timespentonbehalfofparticipantPerstaffmember_16357,
    timespentTravelling: record.timespenttravellingNotwithparticipantPerstaffmember_16358,
    totalEffortTime: record.totalefforttimeforparticipant_16362,

    // Support type & goals
    supportTypeProvided: record.supportTypewhatdidyouprovideprimarily_16505,
    scopeOfNeedGoal: record.scopeofNeedGoal_16580,
    domain: record.domain_16582,
    longTermGoal: record.longTermGoal_16583,
    crisisGoalNeed: record.crisisGoalNeed_16585,
    otherGoalNeed: record.otherGoalNeed_16586,

    // Timespent sections SA1-SA4
    timespentWithParticipantSA1: record.timespentwithparticipantPerstaffmemberSA1_16588,
    timespentOnBehalfSA1: record.timespentonbehalfofparticipantPerstaffmemberSA1_16589,
    timespentTravellingSA2: record.timespenttravellingNotwithparticipantPerstaffmemberSA2_16590,
    ifProvidedSecondService: record.ifyouprovidedasecondserviceoractivityselectithere_16591,
    timespentWithParticipantSA2: record.timespentwithparticipantPerstaffmemberSA2_16593,
    // ... (repeat for SA3, SA4 as needed)
    totalTimespentWithParticipant: record.totaltimespentwithparticipant_16609,
    totalTimespentOnBehalf: record.totaltimespentonbehalfofparticipant_16610,
    totalTimespentTravelling: record.totaltimespenttravelling_16611,

    // AIHW service activity
    aihwServiceActivitySA1: record.aihwServiceActivitySA1_16698,
    aihwServiceActivitySA2: record.aihwServiceActivitySA2_16699,
    aihwServiceActivitySA3: record.aihwServiceActivitySA3_16700,
    aihwServiceActivitySA4: record.aihwServiceActivitySA4_16701,
    
    // Goals
    whichGoalWasThisFor: record.whichgoalwasthisfor_29378_DisplayStr,
    //2ndActivityGoal: record._2ndactivitiyWhichgoalwasthisfor_29496_DisplayStr,
    //3AActivityGoal: record._3AWhichgoalwasthisfor_29497_DisplayStr,
   // 4AActivityGoal: record._4AWhichgoalwasthisfor_29498_DisplayStr,

    // Staff identity
    staffID: record.staffID,
    fName: record.fName,
    middleInitial: record.middleInitial,
    lName: record.lName,

    // ... Add all other relevant fields, simply repeating for each column in your raw data.

    // Dates
    auditDate: record.auditDate ? moment(record.auditDate).format("DD/MM/YYYY") : "",
    transactionDate: record.transactionDate ? moment(record.transactionDate).format("DD/MM/YYYY") : "",

    // Payment & finance
    financeProjectCode: record.financeprojectcode_33310,
    briefTransactionDescription: record.brieftransactiondescription_33311,
    supplierProvider: record.supplierprovider_33312,
    howWasPaymentMade: record.howwaspaymentmade_33314,
    authorisedBy: record.authorisedby_33315,

    // Clinical observations & vitals
    temperature: record.temprature_26012,
    bloodPressure: record.bloodPressuremmHg_26013,
    heartRate: record.heartRatebeastperminute_26014,
    auditStaff: record.auditStaffID,

  };
}


export function transformServiceActivities(records) {
  const minimalKeys = [
    "formResponseID",
    "programName",
    "dateCompleted",
    "micahTeam",
    "notes"
  ];

  // Map all records to frontend format first
  const mapped = records.map(mapServiceActivities);

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
