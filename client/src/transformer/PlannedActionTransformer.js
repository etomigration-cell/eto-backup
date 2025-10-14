import moment from "moment";

function transformPlannedAction(input) {
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
    auditDate: input.auditDate ? moment(input.auditDate).format("DD/MM/YYYY") : "",
    dataEnteredByID: input.dataEnteredByID ?? null,
    draftSavedOn: input.draftSavedOn ?? null,
    removedDate: input.removedDate ?? null,
    primarilyResponsible_name: input.primarilyResponsible_15702 ?? null,
    primarilyResponsible_choiceID: input.primarilyResponsible_15702_ResponseChoiceID ?? null,
    actionDescription: input.actionDescription_15703 ?? null,
    actionComment: input.actionComment_15704 ?? null,
    actionDueDate: input.actionDueDate_15705 ? moment(input.actionDueDate_15705).format("DD/MM/YYYY") : "",
    completionDate: input.completionDateLeaveBlankIfGoalIncomplete_15706 ? moment(input.completionDateLeaveBlankIfGoalIncomplete_15706).format("DD/MM/YYYY") : "",
    micahTeam: input.micahTeam_15707 ?? null,
    parentFormResponseID: input.parentFormResponseID_293 ?? null,
    actionLTGoal_id: input.thisactionisinresponsetothisLTgoal_16960 ?? null,
    actionLTGoal_display: input.thisactionisinresponsetothisLTgoal_16960_DisplayStr ?? null,
    actionCrisisGoal_id: input.thisactionisinresponsetothisCrisisgoal_16961 ?? null,
    actionCrisisGoal_display: input.thisactionisinresponsetothisCrisisgoal_16961_DisplayStr ?? null,
    actionOtherGoal_id: input.thisactionisinresponsetothisOthergoal_16962 ?? null,
    actionOtherGoal_display: input.thisactionisinresponsetothisOthergoal_16962_DisplayStr ?? null,
    hideifEmpty: input.hideifEmpty_16964 ?? null,
    lTgoalisempty_val: input.lTgoalisempty_16965 ?? null,
    lTgoalisempty_choiceID: input.lTgoalisempty_16965_ResponseChoiceID ?? null,
    crisisGoalIsEmpty_val: input.crisisgoalisempty_16966 ?? null,
    crisisGoalIsEmpty_choiceID: input.crisisgoalisempty_16966_ResponseChoiceID ?? null,
    otherGoalIsEmpty_val: input.othergoalisempty_16967 ?? null,
    otherGoalIsEmpty_choiceID: input.othergoalisempty_16967_ResponseChoiceID ?? null,
    closeStatus_status: input.closestatusofPlannedAction_22338 ?? null,
    closeStatus_choiceID: input.closestatusofPlannedAction_22338_ResponseChoiceID ?? null,
    assignedToStaffMember: input.assignedtoStaffMember_22728 ?? null,
    selectYourName: input.selectyourname_24635 ?? null,
    whichGoalWasThisFor_id: input.whichgoalwasthisfor_29382 ?? null,
    whichGoalWasThisFor_sourceFormID: input.whichgoalwasthisfor_29382_SourceFormID ?? null,
    whichGoalWasThisFor_display: input.whichgoalwasthisfor_29382_DisplayStr ?? null,
    actionCreatedBy: input.actioncreatedby_29503 ?? null,
    riskLevel_level: input.riskLevel_33169 ?? null,
    riskLevel_choiceID: input.riskLevel_33169_ResponseChoiceID ?? null,
    fName: input.fName ?? null,
    lName: input.lName ?? null,
  };
}

export function transformAllPlannedAction(records) {
  const minimalKeys = [
    "formResponseID",
    "auditDate",
    "micahTeam",
    "actionDescription",
    "actionDueDate",
    "completionDate"
  ];

  // Map all records to frontend format first
  const mapped = records.map(transformPlannedAction);

  console.log(mapped);

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