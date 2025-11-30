import moment from "moment";

function transformContactInfo(input) {
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
    responseCreatedDate: input.responseCreatedDate
          ? moment(input.responseCreatedDate).format("DD/MM/YYYY")
          : "",
    programID: input.programID ?? null,
    programName: input.programName_19776 ?? null,
    auditStaffID: input.auditStaffID ?? null,
    auditDate: input.auditDate
          ? moment(input.auditDate).format("DD/MM/YYYY")
          : "",
    dataEnteredByID: input.dataEnteredByID ?? null,
    draftSavedOn: input.draftSavedOn ?? null,
    removedDate: input.removedDate
          ? moment(input.removedDate).format("DD/MM/YYYY")
          : "",
    name: input.name_9373 ?? null,
    relationship_type: input.relationship_9376 ?? null,
    relationship_choiceID: input.relationship_9376_ResponseChoiceID ?? null,
    permissionToContact_allowed: input.permissionToContactNextOfKinIfRequired_9377 ?? null,
    permissionToContact_choiceID: input.permissionToContactNextOfKinIfRequired_9377_ResponseChoiceID ?? null,
    isThisChildInYourFullTimeCare_value: input.isThisChildInYourFullTimeCare_9467 ?? null,
    isThisChildInYourFullTimeCare_choiceID: input.isThisChildInYourFullTimeCare_9467_ResponseChoiceID ?? null,
    dob: input.dob_9475 ?? null,
    gender_value: input.gender_9477 ?? null,
    gender_choiceID: input.gender_9477_ResponseChoiceID ?? null,
    careDetails: input.careDetails_9479 ?? null,
    childRelationship_value: input.childRelationship_9505 ?? null,
    childRelationship_choiceID: input.childRelationship_9505_ResponseChoiceID ?? null,
    whoseContactDetails_value: input.whoseContactDetailsarethese_9521 ?? null,
    whoseContactDetails_choiceID: input.whoseContactDetailsarethese_9521_ResponseChoiceID ?? null,
    phone_mobile: input.mobilePhone_9523 ?? null,
    phone_work: input.workPhone_9525 ?? null,
    phone_home: input.homePhone_9526 ?? null,
    selectParticipantInETO: input.selectparticipantinETO_9529 ?? null,
    isCurrentNextOfKin_value: input.isthisthecurrentNextofKin_9533 ?? null,
    isCurrentNextOfKin_choiceID: input.isthisthecurrentNextofKin_9533_ResponseChoiceID ?? null,
    commentsNotes: input.commentsNotes_9534 ?? null,
    email: input.email_9535 ?? null,
    address_apartmentUnit: input.apartmentunitNumber_9458 ?? input.apartmentUnitNo_10903 ?? null,
    address_streetNumber: input.streetNumber_9459 ?? input.streetNumber_10904 ?? null,
    address_streetName: input.streetName_9460 ?? input.streetName_10905 ?? null,
    address_suburb: input.suburblocality_9461 ?? input.suburb_10906 ?? null,
    address_postCode: input.postCode_10910 ?? null,
    address_poBox: input.poBox_10911 ?? null,
    address_housingProvider: input.housingProvider_11403 ?? null,
    address_datethisbecameHousingProvider: input.datethisbecameHousingProvider_12590 ?? null,
    address_datethisceasedasHousingProvider: input.datethisceasedasHousingProvider_12591 ?? null,
    whendidtheparticipantbegintoresideatthisaddress: input.whendidtheparticipantbegintoresideatthisaddress_12911,
    whendidtheparticipantceaseresidingatthisaddressLeaveblankifcurrentaddress: input.whendidtheparticipantceaseresidingatthisaddressLeaveblankifcurrentaddress_12912,
    generalPractitioner_select: input.selectGeneralPractitioner_13123 ?? null,
    generalPractitioner_becameDate: input.datethisbecameyourGP_13127 ?? null,
    generalPractitioner_ceasedDate: input.datethisceasedbeingyourGP_13128 ?? null,
    whatistheState_value: input.whatistheState_13303 ?? null,
    whatistheState_choiceID: input.whatistheState_13303_ResponseChoiceID ?? null,
    safetocall_mobile: input.safetocallM_13306 ?? null,
    safetocall_mobileChoiceID: input.safetocallM_13306_ResponseChoiceID ?? null,
    safetocall_work: input.safetocallW_13307 ?? null,
    safetocall_workChoiceID: input.safetocallW_13307_ResponseChoiceID ?? null,
    safetocall_home: input.safetocallH_13308 ?? null,
    safetocall_homeChoiceID: input.safetocallH_13308_ResponseChoiceID ?? null,
    notesCommentsPhonesEmail: input.notescommentsaboutphonesemail_13309 ?? null,
    privateGuardian_isPrivateGuardian: input.isthispersonaprivateguardianfortheparticipantappointedbytheQueenslandCivilandAdministrativeTri_16831 ?? null,
    privateGuardian_choiceID: input.isthispersonaprivateguardianfortheparticipantappointedbytheQueenslandCivilandAdministrativeTri_16831_ResponseChoiceID ?? null,
    privateGuardian_becameDate: input.datethispersonbecameaprivateguardian_16832 ?? null,
    privateGuardian_ceasedDate: input.datethispersonceasedbeingaPrivateGuardian_16833 ?? null,
    informalDecisionMaker_isInformal: input.isthispersonaninformaldecisionmakeronbehalfoftheparticipant_16834 ?? null,
    informalDecisionMaker_choiceID: input.isthispersonaninformaldecisionmakeronbehalfoftheparticipant_16834_ResponseChoiceID ?? null,
    informalDecisionMaker_becameDate: input.datethispersonbecameaninformaldecisionmaker_16835 ?? null,
    informalDecisionMaker_ceasedDate: input.datethispersonceasedbeinganinformaldecisionmaker_16836 ?? null,
    contactAtPublicGuardian: input.contactatPublicGuardian_16851 ?? null,
    attorneyEnduringPower: input.attorneyunderEnduringPowerofAttorneyorAdvanceHealthDirective_16855 ?? null,
    statutoryHealthAttorney: input.statutoryHealthAttorney_16857 ?? null,
    substituteDecisionMaker_becameDate: input.datethisentitybecameaSubstituteDecisionMaker_16865 ?? null,
    substituteDecisionMaker_ceasedDate: input.datethisentityceasedbeingaSubstituteDecisionMakerleaveblankifcurrent_16866 ?? null,
    safetoM_value: input.safetoM_16872 ?? null,
    safetoM_choiceID: input.safetoM_16872_ResponseChoiceID ?? null,
    safetoW_value: input.safetoW_16873 ?? null,
    safetoW_choiceID: input.safetoW_16873_ResponseChoiceID ?? null,
    safetoH_value: input.safetoH_16874 ?? null,
    safetoH_choiceID: input.safetoH_16874_ResponseChoiceID ?? null,
    selectHealthSpecialist: input.selectHealthSpecialist_17361 ?? null,
    ausAddress_address1: input.address1_19777 ?? input.address1_19785 ?? input.address1_19792 ?? input.address1_19799 ?? null,
    ausAddress_address2: input.address2_19779 ?? input.address2_19786 ?? input.address2_19793 ?? input.address2_19800 ?? null,
    ausAddress_locality: input.ausSuburbLocality_19780 ?? input.ausSuburbLocality_19787 ?? input.ausSuburbLocality_19794 ?? input.ausSuburbLocality_19801 ?? null,
    ausAddress_state: input.stateAus_19781 ?? input.stateAus_19788 ?? input.stateAus_19795 ?? input.stateAus_19802 ?? null,
    ausAddress_postalCode: input.ausPostalCode_19782 ?? input.ausPostalCode_19789 ?? input.ausPostalCode_19796 ?? input.ausPostalCode_19803 ?? null,
    ausAddress_phoneNumber: input.ausPhoneNumber_19783 ?? input.ausPhoneNumber_19790 ?? input.ausPhoneNumber_19797 ?? input.ausPhoneNumber_19804 ?? null,
    isCurrentEmergencyContact_value: input.isthisthecurrentEmergencyContact_21680 ?? null,
    isCurrentEmergencyContact_choiceID: input.isthisthecurrentEmergencyContact_21680_ResponseChoiceID ?? null,
    addressbookStatus: input.addressbookstatus_23962 ?? null,
    dateContactBecameNoncurrent: input.datethiscontactbecameNoncurrent_25349 ?? null,
    accommodationType_value: input.accommodationType_27221 ?? null,
    accommodationType_choiceID: input.accommodationType_27221_ResponseChoiceID ?? null,
    accommodationType_other: input.ifotherPleasespecify_27223 ?? null,
    hostelBoardinghouse: input.whichHostelBoardinghouseisit_27224 ?? null,
    isThisA_value: input.isthisa_27225 ?? null,
    isThisA_choiceID: input.isthisa_27225_ResponseChoiceID ?? null,
    useThisAddressForDRCDEX_value: input.usethisaddressforDRCDEXsubmission_28230 ?? null,
    useThisAddressForDRCDEX_choiceID: input.usethisaddressforDRCDEXsubmission_28230_ResponseChoiceID ?? null,
    keyNumber: input.keyNumber_28234 ?? null,
    suburbandPostCode: input.suburbandPostCode_28290 ?? null,
    dateCeasedAsServiceProvider: input.datethisceasedasserviceprovider_29299 ?? null
  };
}


export function transformAllAddressBook(records) {
  const minimalKeys = [
    "formResponseID",
    "auditDate",
    "whoseContactDetails_value",
    "name",
    "accommodationType_value",
    "addressbookStatus",
    "address_apartmentUnit",
    "address_streetNumber",
    "address_streetName",
    "address_postCode",
    "phone_mobile"
  ];

  // Map all records to frontend format first
  const mapped = records.map(transformContactInfo);
  console.log(mapped, "mapped");

  // Then extract minimal information from mapped records
  const minimal = mapped.map(rec =>
    Object.fromEntries(
      minimalKeys.map(key => [key, rec[key]])
    )
  );

  return {
    minimal,
    full: mapped
  };
}

