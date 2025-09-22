import moment from "moment";

export function mapSupportPeriod(record) {
  return {
    id: record.formResponseID,
    programName: record.programName,
    subjectType: record.subjectName,
    startDate: moment(record.whatIsTheStartDateOfTheSupportPeriod_16787).format("DD/MM/YYYY"),
    endDate: moment(record.whatIsTheEndDateOfTheSupportPeriodOnlyCompleteThisWhenTheSupportPeriodHasEnded_16788).format("DD/MM/YYYY"),
    auditDate: moment(record.auditDate).format("DD/MM/YYYY"),
    dateLastUpdated: moment(record.responseCreatedDate).format("DD/MM/YYYY"),
    firstName: record.fName,
    lastName: record.lName,
    submitsReport: record.submitsSHSAIHWreports_16795,
    micahTeam: record.entityName,
    submitAIHWReports: record.submitsSHSAIHWreports_16795,
    aihwOrganisationId: record.aihwOrganisationID_16875,
    dateAssistanceRequested: record.onwhatdatewasassistanceoriginallyrequested_20036,
    participantSpeaksLanguageOtherThanEnglishAtHome: record.doestheParticipantspeakalanguageotherthanEnglishathome_24803,
    languageSpokenAtHome: record.doestheParticipantspeakalanguageotherthanEnglishathome_24803_ResponseChoiceID,
    englishProficiency: record.whatistheparticipantsselfassessedEnglishproficiency_24801,
    formalReferralType: record.whatwastheparticipantssourceofformalreferraltothisagency_16876,
    receivedServiceFromTeamInPast: record.hasthispersonfamilyreceivedservicesfromthisteaminthepastRecordedeitherinSRSETOorother_22184,
    genderFromDemographics: record.genderFromDemographics_16786,
    aihwSex: record.aihwGender_16785,
    housingAtTheCloseOfSupportPeriod: record.wasthefamilyparticipantinsecureandsustainablehousingatthecloseofthissupportperiodSHSteamsMUSTa_19933,
    selectTheReasonThatTheSupportPeriodEnded: record.selectTheReasonThatTheSupportPeriodEnded_16784,
    wasthecarefinderclientfeedbacksurveyofferred: record.wasthecarefinderclientfeedbacksurveyofferred_31682,
  };
}

export function transformSupportPeriods(records) {
  const minimalKeys = [
    "id",
    "programName",
    "subjectType",
    "startDate",
    "endDate",
    "auditDate",
    "dateLastUpdated",
    "firstName",
    "lastName",
    "submitsReport",
    "micahTeam"
  ];

  // Map all records to frontend format first
  const mapped = records.map(mapSupportPeriod);

  const minimal = mapped.map(rec =>
    ({
      ...Object.fromEntries(
        minimalKeys.map(key => [key, rec[key]])
      ),
      StaffName: `${rec.firstName || ''} ${rec.lastName || ''}`.trim(),
    })
  );

  return {
    minimal,
    full: mapped
  };
}
