import moment from "moment";

function transformLotusInitialContractForm(input) {
  return {
    formResponseID: input.formResponseID ?? null,
    formIdentifier: input.formIdentifier ?? null,
    subjectID: input.subjectID ?? null,
    groupID: input.groupID ?? null,
    familyID: input.familyID ?? null,
    responseSetID: input.responseSetID ?? null,
    formID: input.formID ?? null,
    collectionTypeID: input.collectionTypeID ?? null,
    subjectTypeID: input.subjectTypeID ?? null,
    collectionID: input.collectionID ?? null,
    responseCreatedDate: input.responseCreatedDate ? moment(input.responseCreatedDate).format("DD/MM/YYYY") : "",
    programID: input.programID ?? null,
    auditStaffID: input.auditStaffID ?? null,
    auditDate: input.auditDate ? moment(input.auditDate).format("DD/MM/YYYY") : "",
    dataEnteredByID: input.dataEnteredByID ?? null,
    draftSavedOn: input.draftSavedOn ?? null,
    removedDate: input.removedDate ?? null,
    contactMethod_27264: input.contactMethod_27264 ?? null,
    contactMethod_27264_ResponseChoiceID: input.contactMethod_27264_ResponseChoiceID ?? null,
    contactLocation_27265: input.contactLocation_27265 ?? null,
    contactLocation_27265_ResponseChoiceID: input.contactLocation_27265_ResponseChoiceID ?? null,
    phoneContactType_27266: input.phoneContactType_27266 ?? null,
    phoneContactType_27266_ResponseChoiceID: input.phoneContactType_27266_ResponseChoiceID ?? null,
    ifcontactlocationisotherpleasespecify_27267: input.ifcontactlocationisotherpleasespecify_27267 ?? null,
    howmanystaffdidthistogetherAtmost4_27268: input.howmanystaffdidthistogetherAtmost4_27268 ?? null,
    timespentwithparticipantPerstaffmember_27269: input.timespentwithparticipantPerstaffmember_27269 ?? null,
    timespentonbehalfofparticipantPerstaffmember_27270: input.timespentonbehalfofparticipantPerstaffmember_27270 ?? null,
    timespenttravellingNotwithparticipantPerstaffmember_27271: input.timespenttravellingNotwithparticipantPerstaffmember_27271 ?? null,
    totaltimespentwithparticipant_27272: input.totaltimespentwithparticipant_27272 ?? null,
    totaltimespentonbehalfofparticipant_27273: input.totaltimespentonbehalfofparticipant_27273 ?? null,
    totaltimespenttravelling_27274: input.totaltimespenttravelling_27274 ?? null,
    totalefforttimeforparticipant_27275: input.totalefforttimeforparticipant_27275 ?? null,
    selectyourname_27276: input.selectyourname_27276 ?? null,
    micahTeam_27277: input.micahTeam_27277 ?? null,
    selectthe2ndstaffperson_27278: input.selectthe2ndstaffperson_27278 ?? null,
    whatotherteamassisted_27279: input.whatotherteamassisted_27279 ?? null,
    howdidyoufindoutaboutourservice_27283: input.howdidyoufindoutaboutourservice_27283 ?? null,
    howdidyoufindoutaboutourservice_27283_ResponseChoiceID: input.howdidyoufindoutaboutourservice_27283_ResponseChoiceID ?? null,
    preferredcounsellingsupportvia_27293: input.preferredcounsellingsupportvia_27293 ?? null,
    preferredcounsellingsupportvia_27293_ResponseChoiceID: input.preferredcounsellingsupportvia_27293_ResponseChoiceID ?? null,
    areyouthepersonwithadisability_27299: input.areyouthepersonwithadisability_27299 ?? null,
    areyouthepersonwithadisability_27299_ResponseChoiceID: input.areyouthepersonwithadisability_27299_ResponseChoiceID ?? null,
    disabilityimpairmentorconditionindicator_27304: input.disabilityimpairmentorconditionindicator_27304 ?? null,
    disabilityimpairmentorconditionindicator_27304_ResponseChoiceID: input.disabilityimpairmentorconditionindicator_27304_ResponseChoiceID ?? null,
    languageSpokenatHomeotherthanEnglish_27305: input.languageSpokenatHomeotherthanEnglish_27305 ?? null,
    mainsourceofincome_27313: input.mainsourceofincome_27313 ?? null,
    mainsourceofincome_27313_ResponseChoiceID: input.mainsourceofincome_27313_ResponseChoiceID ?? null,
    selectallofthereasonsforseekingassistance_27321: input.selectallofthereasonsforseekingassistance_27321 ?? null,
    selectallofthereasonsforseekingassistance_27321_ResponseChoiceID: input.selectallofthereasonsforseekingassistance_27321_ResponseChoiceID ?? null,
    selectyourlocation_27324: input.selectyourlocation_27324 ?? null,
    selectyourlocation_27324_ResponseChoiceID: input.selectyourlocation_27324_ResponseChoiceID ?? null,
    mailingList_27329: input.mailingList_27329 ?? null,
    mailingList_27329_ResponseChoiceID: input.mailingList_27329_ResponseChoiceID ?? null,
    areyouworkingwithanyotherservices_27331: input.areyouworkingwithanyotherservices_27331 ?? null,
    referredby_27332: input.referredby_27332 ?? null,
    eligibleforLotusServices_27333: input.eligibleforLotusServices_27333 ?? null,
    eligibleforLotusServices_27333_ResponseChoiceID: input.eligibleforLotusServices_27333_ResponseChoiceID ?? null,
    eligibleDate_27334: moment(input.eligibleDate_27334).format("DD/MM/YYYY"),
    ineligibleDate_27335: moment(input.ineligibleDate_27335).format("DD/MM/YYYY"),
    otherReasons_27336: input.otherReasons_27336 ?? null,
    historyasachild_27338: input.historyasachild_27338 ?? null,
    historyasachild_27338_ResponseChoiceID: input.historyasachild_27338_ResponseChoiceID ?? null,
    historyasanadult_27340: input.historyasanadult_27340 ?? null,
    historyasanadult_27340_ResponseChoiceID: input.historyasanadult_27340_ResponseChoiceID ?? null,
    childProtection_27342: input.childProtection_27342 ?? null,
    childProtection_27342_ResponseChoiceID: input.childProtection_27342_ResponseChoiceID ?? null,
    otherorders_27343: input.otherorders_27343 ?? null,
    otherorders_27343_ResponseChoiceID: input.otherorders_27343_ResponseChoiceID ?? null,
    name_27476: input.name_27476 ?? null,
    contactDetails_27478: input.contactDetails_27478 ?? null,
    permissiontoContact_27479: input.permissiontoContact_27479 ?? null,
    permissiontoContact_27479_ResponseChoiceID: input.permissiontoContact_27479_ResponseChoiceID ?? null,
    birthCertificate_27482: input.birthCertificate_27482 ?? null,
    medicareCard_27483: input.medicareCard_27483 ?? null,
    driversLicense18Card_27484: input.driversLicense18Card_27484 ?? null,
    other_27485: input.other_27485 ?? null,
    educationStatus_27487: input.educationStatus_27487 ?? null,
    educationStatus_27487_ResponseChoiceID: input.educationStatus_27487_ResponseChoiceID ?? null,
    detailsofbeinginstitutionalizedasachild_27857: input.detailsofbeinginstitutionalizedasachild_27857 ?? null,
    detailsonhistoryofbeinginstitutionalizedasanadult_27858: input.detailsonhistoryofbeinginstitutionalizedasanadult_27858 ?? null,
    doestheParticipantspeakalanguageotherthanEnglishathome_28294: input.doestheParticipantspeakalanguageotherthanEnglishathome_28294 ?? null,
    doestheParticipantspeakalanguageotherthanEnglishathome_28294_ResponseChoiceID: input.doestheParticipantspeakalanguageotherthanEnglishathome_28294_ResponseChoiceID ?? null,
    programName: input.programName ?? null,
    entityName: input.entityName ?? null,
    fName: input.fName ?? null,
    lName: input.lName ?? null,
  };
}


export function transformAllLotusInitialForm(records) {
  const minimalKeys = [
    "formResponseID",
    "responseCreatedDate",
    "auditDate",
    "entityName"
  ];

  // Map all records to frontend format first
  const mapped = records.map(transformLotusInitialContractForm);

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