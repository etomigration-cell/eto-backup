function transformAddressBook(input) {
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
    auditStaffID: input.auditStaffID ?? null,
    auditDate: input.auditDate ?? null,
    dataEnteredByID: input.dataEnteredByID ?? null,
    draftSavedOn: input.draftSavedOn ?? null,
    removedDate: input.removedDate ?? null,
    primarilyResponsible: {
      name: input.primarilyResponsible_15702 ?? null,
      choiceID: input.primarilyResponsible_15702_ResponseChoiceID ?? null
    },
    actionDescription: input.actionDescription_15703 ?? null,
    actionComment: input.actionComment_15704 ?? null,
    actionDueDate: input.actionDueDate_15705 ?? null,
    completionDate: input.completionDateLeaveBlankIfGoalIncomplete_15706 ?? null,
    micahTeam: input.micahTeam_15707 ?? null,
    parentFormResponseID: input.parentFormResponseID_293 ?? null,
    actionLTGoal: {
      id: input.thisactionisinresponsetothisLTgoal_16960 ?? null,
      display: input.thisactionisinresponsetothisLTgoal_16960_DisplayStr ?? null
    },
    actionCrisisGoal: {
      id: input.thisactionisinresponsetothisCrisisgoal_16961 ?? null,
      display: input.thisactionisinresponsetothisCrisisgoal_16961_DisplayStr ?? null
    },
    actionOtherGoal: {
      id: input.thisactionisinresponsetothisOthergoal_16962 ?? null,
      display: input.thisactionisinresponsetothisOthergoal_16962_DisplayStr ?? null
    },
    hideifEmpty: input.hideifEmpty_16964 ?? null,
    lTgoalisempty: {
      val: input.lTgoalisempty_16965 ?? null,
      choiceID: input.lTgoalisempty_16965_ResponseChoiceID ?? null
    },
    crisisGoalIsEmpty: {
      val: input.crisisgoalisempty_16966 ?? null,
      choiceID: input.crisisgoalisempty_16966_ResponseChoiceID ?? null
    },
    otherGoalIsEmpty: {
      val: input.othergoalisempty_16967 ?? null,
      choiceID: input.othergoalisempty_16967_ResponseChoiceID ?? null
    },
    closeStatus: {
      status: input.closestatusofPlannedAction_22338 ?? null,
      choiceID: input.closestatusofPlannedAction_22338_ResponseChoiceID ?? null
    },
    assignedToStaffMember: input.assignedtoStaffMember_22728 ?? null,
    selectYourName: input.selectyourname_24635 ?? null,
    whichGoalWasThisFor: {
      id: input.whichgoalwasthisfor_29382 ?? null,
      sourceFormID: input.whichgoalwasthisfor_29382_SourceFormID ?? null,
      display: input.whichgoalwasthisfor_29382_DisplayStr ?? null
    },
    actionCreatedBy: input.actioncreatedby_29503 ?? null,
    riskLevel: {
      level: input.riskLevel_33169 ?? null,
      choiceID: input.riskLevel_33169_ResponseChoiceID ?? null
    }
  };
}

export function transformAllAddressBook(records) {
  const minimalKeys = [
    "auditDate",
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