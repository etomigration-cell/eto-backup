import moment from "moment";

// Map a single IncomingReferral record to a frontend-friendly format
export function mapIncomingReferral(record) {
  return {
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
    responseCreatedDate: record.responseCreatedDate ? moment(record.responseCreatedDate).format("DD/MM/YYYY") : "",
    programID: record.programID,
    auditStaffID: record.auditStaffID,
    auditDate: record.auditDate ? moment(record.auditDate).format("DD/MM/YYYY") : "",
    dataEnteredByID: record.dataEnteredByID,
    draftSavedOn: record.draftSavedOn ? moment(record.draftSavedOn).format("DD/MM/YYYY") : "",
    removedDate: record.removedDate ? moment(record.removedDate).format("DD/MM/YYYY") : "",
    micahTeam: record.micahTeam_16524,
    referredFrom: record.referredfrom_16526,
    wasReferralReceivedViaSRS: record.wasthisreferralreceivedviaSRS_16527,
    wasReferralReceivedViaSRS_ChoiceID: record.wasthisreferralreceivedviaSRS_16527_ResponseChoiceID,
    scannedDocuments: record.scannedDocuments_16529,
    referralReviewedOn: record.referralreviewedon_16530 ? moment(record.referralreviewedon_16530).format("DD/MM/YYYY") : null,
    referralReviewedBy: record.referralReviewedby_16531,
    referralAccepted: record.referralaccepted_16532,
    referralAcceptedChoiceID: record.referralaccepted_16532_ResponseChoiceID,
    referralRejectedReason: record.referralrejectedReason_16534,
    referralRejectedReasonChoiceID: record.referralrejectedReason_16534_ResponseChoiceID,
    referralReceivedOn: record.referralreceivedon_17503 ? moment(record.referralreceivedon_17503).format("DD/MM/YYYY") : null,
    isPoliceReferral: record.youhaveindicatedtheSLMSteamIsthisaPoliceReferral_20973,
    isPoliceReferral_ChoiceID: record.youhaveindicatedtheSLMSteamIsthisaPoliceReferral_20973_ResponseChoiceID,
    referralReceiveTime: record.referralreceivetime_20977,
    ignore: record.ignore_20978,
    violenceType: record.violenceType_20979,
    violenceType_ChoiceID: record.violenceType_20979_ResponseChoiceID,
    personType: record.personType_20980,
    personType_ChoiceID: record.personType_20980_ResponseChoiceID,
    initialContact: record.initialContactBesuretoalsocompleteotherrelevantTouchPoints_20982,
    initialContact_ChoiceID: record.initialContactBesuretoalsocompleteotherrelevantTouchPoints_20982_ResponseChoiceID,
    emergencyExaminationAuthority: record.emergencyExaminationAuthority_21263,
    emergencyExaminationAuthority_ChoiceID: record.emergencyExaminationAuthority_21263_ResponseChoiceID,
    comments: record.comments_27878,
    isThisForA: record.isthisfora_27879,
    isThisForA_ChoiceID: record.isthisfora_27879_ResponseChoiceID,
    selfReferralContactType: record.whatwastheselfreferralcontacttype_28394,
    selfReferralContactType_ChoiceID: record.whatwastheselfreferralcontacttype_28394_ResponseChoiceID,
    hasAccessibilityNeeds: record.doesthepersonhaveaccessibilityneeds_28595,
    hasAccessibilityNeeds_ChoiceID: record.doesthepersonhaveaccessibilityneeds_28595_ResponseChoiceID,
    hrT: record.hrT_28859,
    hrT_ChoiceID: record.hrT_28859_ResponseChoiceID,
    referredOnto: record.referredonto_28860,
    referredOnto_ChoiceID: record.referredonto_28860_ResponseChoiceID,
    whichMicahTeamWasReferralMadeTo: record.whichMicahTeamwasthereferralmadeto_30045,
    whichExternalServiceWasReferralMadeTo: record.whichexternalservicewasthereferralmadeto_30046,
    immediateNeeds: record.immediateNeeds_30047,
    healthIssues: record.healthIssues_30048,
    housingSituation: record.housingsituation_30049,
    intakeReferralOrgPath: record.intakeReferralOrgPath_33182,
    intakeClientKey: record.intakeClientKey_33183,
    intakeEpisodeKey: record.intakeEpisodeKey_33184,
    isRediCASEReferral: record.isthisarediCASEReferral_33186,
    isRediCASEReferral_ChoiceID: record.isthisarediCASEReferral_33186_ResponseChoiceID,
    firstName: record.fName,
    lastName: record.lName,
    staffName: `${record.fName || ""} ${record.lName || ""}`.trim()
  };
}

// Creates minimal and full output for the frontend
export function transformIncomingReferral(records) {
  const minimalKeys = [
    "formResponseID",
    "programID",
    "subjectID",
    "micahTeam",
    "responseCreatedDate",
    "referralReviewedOn",
    "referralAccepted",
    "referralReceivedOn",
    "auditDate",
    "removedDate",
    "collectionID",
    "formIdentifier"
  ];

  const mapped = records.map(mapIncomingReferral);

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
