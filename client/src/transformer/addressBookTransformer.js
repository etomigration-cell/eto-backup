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
    responseCreatedDate: input.responseCreatedDate ?? null,
    programID: input.programID ?? null,
    programName: input.programName_19776 ?? null,
    auditStaffID: input.auditStaffID ?? null,
    auditDate: moment(input.auditDate).format("DD/MM/YYYY") ?? null,
    dataEnteredByID: input.dataEnteredByID ?? null,
    draftSavedOn: input.draftSavedOn ?? null,
    removedDate: input.removedDate ?? null,
    name: input.name_9373 ?? null,
    relationship: {
      type: input.relationship_9376 ?? null,
      choiceID: input.relationship_9376_ResponseChoiceID ?? null
    },
    permissionToContact: {
      allowed: input.permissionToContactNextOfKinIfRequired_9377 ?? null,
      choiceID: input.permissionToContactNextOfKinIfRequired_9377_ResponseChoiceID ?? null
    },
    isThisChildInYourFullTimeCare: {
      value: input.isThisChildInYourFullTimeCare_9467 ?? null,
      choiceID: input.isThisChildInYourFullTimeCare_9467_ResponseChoiceID ?? null
    },
    dob: input.dob_9475 ?? null,
    gender: {
      value: input.gender_9477 ?? null,
      choiceID: input.gender_9477_ResponseChoiceID ?? null
    },
    careDetails: input.careDetails_9479 ?? null,
    childRelationship: {
      value: input.childRelationship_9505 ?? null,
      choiceID: input.childRelationship_9505_ResponseChoiceID ?? null
    },
    whoseContactDetails: {
      value: input.whoseContactDetailsarethese_9521 ?? null,
      choiceID: input.whoseContactDetailsarethese_9521_ResponseChoiceID ?? null
    },
    phone: {
      mobile: input.mobilePhone_9523 ?? null,
      work: input.workPhone_9525 ?? null,
      home: input.homePhone_9526 ?? null,
    },
    selectParticipantInETO: input.selectparticipantinETO_9529 ?? null,
    isCurrentNextOfKin: {
      value: input.isthisthecurrentNextofKin_9533 ?? null,
      choiceID: input.isthisthecurrentNextofKin_9533_ResponseChoiceID ?? null
    },
    commentsNotes: input.commentsNotes_9534 ?? null,
    email: input.email_9535 ?? null,
    address: {
      apartmentUnit: input.apartmentunitNumber_9458 ?? input.apartmentUnitNo_10903 ?? null,
      streetNumber: input.streetNumber_9459 ?? input.streetNumber_10904 ?? null,
      streetName: input.streetName_9460 ?? input.streetName_10905 ?? null,
      suburb: input.suburblocality_9461 ?? input.suburb_10906 ?? null,
      postCode: input.postCode_10910 ?? null,
      poBox: input.poBox_10911 ?? null,
      housingProvider: input.housingProvider_11403 ?? null,
      datethisbecameHousingProvider: input.datethisbecameHousingProvider_12590 ?? null,
      datethisceasedasHousingProvider: input.datethisceasedasHousingProvider_12591 ?? null,
    },
    generalPractitioner: {
      select: input.selectGeneralPractitioner_13123 ?? null,
      becameDate: input.datethisbecameyourGP_13127 ?? null,
      ceasedDate: input.datethisceasedbeingyourGP_13128 ?? null,
    },
    whatistheState: {
      value: input.whatistheState_13303 ?? null,
      choiceID: input.whatistheState_13303_ResponseChoiceID ?? null
    },
    safetocall: {
      mobile: input.safetocallM_13306 ?? null,
      mobileChoiceID: input.safetocallM_13306_ResponseChoiceID ?? null,
      work: input.safetocallW_13307 ?? null,
      workChoiceID: input.safetocallW_13307_ResponseChoiceID ?? null,
      home: input.safetocallH_13308 ?? null,
      homeChoiceID: input.safetocallH_13308_ResponseChoiceID ?? null,
    },
    notesCommentsPhonesEmail: input.notescommentsaboutphonesemail_13309 ?? null,
    privateGuardian: {
      isPrivateGuardian: input.isthispersonaprivateguardianfortheparticipantappointedbytheQueenslandCivilandAdministrativeTri_16831 ?? null,
      choiceID: input.isthispersonaprivateguardianfortheparticipantappointedbytheQueenslandCivilandAdministrativeTri_16831_ResponseChoiceID ?? null,
      becameDate: input.datethispersonbecameaprivateguardian_16832 ?? null,
      ceasedDate: input.datethispersonceasedbeingaPrivateGuardian_16833 ?? null,
    },
    informalDecisionMaker: {
      isInformal: input.isthispersonaninformaldecisionmakeronbehalfoftheparticipant_16834 ?? null,
      choiceID: input.isthispersonaninformaldecisionmakeronbehalfoftheparticipant_16834_ResponseChoiceID ?? null,
      becameDate: input.datethispersonbecameaninformaldecisionmaker_16835 ?? null,
      ceasedDate: input.datethispersonceasedbeinganinformaldecisionmaker_16836 ?? null,
    },
    contactAtPublicGuardian: input.contactatPublicGuardian_16851 ?? null,
    attorneyEnduringPower: input.attorneyunderEnduringPowerofAttorneyorAdvanceHealthDirective_16855 ?? null,
    statutoryHealthAttorney: input.statutoryHealthAttorney_16857 ?? null,
    substituteDecisionMaker: {
      becameDate: input.datethisentitybecameaSubstituteDecisionMaker_16865 ?? null,
      ceasedDate: input.datethisentityceasedbeingaSubstituteDecisionMakerleaveblankifcurrent_16866 ?? null
    },
    safetoM: {
      value: input.safetoM_16872 ?? null,
      choiceID: input.safetoM_16872_ResponseChoiceID ?? null
    },
    safetoW: {
      value: input.safetoW_16873 ?? null,
      choiceID: input.safetoW_16873_ResponseChoiceID ?? null
    },
    safetoH: {
      value: input.safetoH_16874 ?? null,
      choiceID: input.safetoH_16874_ResponseChoiceID ?? null
    },
    selectHealthSpecialist: input.selectHealthSpecialist_17361 ?? null,
    ausAddress: {
      address1: input.address1_19777 ?? input.address1_19785 ?? input.address1_19792 ?? input.address1_19799 ?? null,
      address2: input.address2_19779 ?? input.address2_19786 ?? input.address2_19793 ?? input.address2_19800 ?? null,
      locality: input.ausSuburbLocality_19780 ?? input.ausSuburbLocality_19787 ?? input.ausSuburbLocality_19794 ?? input.ausSuburbLocality_19801 ?? null,
      state: input.stateAus_19781 ?? input.stateAus_19788 ?? input.stateAus_19795 ?? input.stateAus_19802 ?? null,
      postalCode: input.ausPostalCode_19782 ?? input.ausPostalCode_19789 ?? input.ausPostalCode_19796 ?? input.ausPostalCode_19803 ?? null,
      phoneNumber: input.ausPhoneNumber_19783 ?? input.ausPhoneNumber_19790 ?? input.ausPhoneNumber_19797 ?? input.ausPhoneNumber_19804 ?? null,
    },
    isCurrentEmergencyContact: {
      value: input.isthisthecurrentEmergencyContact_21680 ?? null,
      choiceID: input.isthisthecurrentEmergencyContact_21680_ResponseChoiceID ?? null
    },
    addressbookStatus: input.addressbookstatus_23962 ?? null,
    dateContactBecameNoncurrent: input.datethiscontactbecameNoncurrent_25349 ?? null,
    accommodationType: {
      value: input.accommodationType_27221 ?? null,
      choiceID: input.accommodationType_27221_ResponseChoiceID ?? null,
      other: input.ifotherPleasespecify_27223 ?? null
    },
    hostelBoardinghouse: input.whichHostelBoardinghouseisit_27224 ?? null,
    isThisA: {
      value: input.isthisa_27225 ?? null,
      choiceID: input.isthisa_27225_ResponseChoiceID ?? null
    },
    useThisAddressForDRCDEX: {
      value: input.usethisaddressforDRCDEXsubmission_28230 ?? null,
      choiceID: input.usethisaddressforDRCDEXsubmission_28230_ResponseChoiceID ?? null
    },
    keyNumber: input.keyNumber_28234 ?? null,
    suburbandPostCode: input.suburbandPostCode_28290 ?? null,
    dateCeasedAsServiceProvider: input.datethisceasedasserviceprovider_29299 ?? null
  };
}

export function transformAllAddressBook(records) {
  const minimalKeys = [
    "auditDate",
    "whoseContactDetails",
    "name",
    "accommodationType",
    "addressbookStatus",
    "address",
    "phone"
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

