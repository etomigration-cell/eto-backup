namespace EtoApi.Models
{
    public class PlannedAction
    {
        public int? FormResponseID { get; set; }
        public int? FormIdentifier { get; set; }
        public int? SubjectID { get; set; }
        public int? GroupID { get; set; }
        public int? FamilyID { get; set; }
        public int? ResponseSetID { get; set; }
        public int? FormID { get; set; }
        public int? CollectionTypeID { get; set; }
        public int? SubjectTypeID { get; set; }
        public int? CollectionID { get; set; }
        public DateTime? ResponseCreatedDate { get; set; }
        public string? ProgramID { get; set; }
        public int? AuditStaffID { get; set; }
        public DateTime? AuditDate { get; set; }
        public int? DataEnteredByID { get; set; }
        public DateTime? DraftSavedOn { get; set; }
        public DateTime? RemovedDate { get; set; }
        public string? PrimarilyResponsible_15702 { get; set; }
        public int? PrimarilyResponsible_15702_ResponseChoiceID { get; set; }
        public string? ActionDescription_15703 { get; set; }
        public string? ActionComment_15704 { get; set; }
        public DateTime? ActionDueDate_15705 { get; set; }
        public DateTime? CompletionDateLeaveBlankIfGoalIncomplete_15706 { get; set; }
        public string? MicahTeam_15707 { get; set; }
        public int? ParentFormResponseID_293 { get; set; }
        public int? ThisactionisinresponsetothisLTgoal_16960 { get; set; }
        public string? ThisactionisinresponsetothisLTgoal_16960_DisplayStr { get; set; }
        public int? ThisactionisinresponsetothisCrisisgoal_16961 { get; set; }
        public string? ThisactionisinresponsetothisCrisisgoal_16961_DisplayStr { get; set; }
        public int? ThisactionisinresponsetothisOthergoal_16962 { get; set; }
        public string? ThisactionisinresponsetothisOthergoal_16962_DisplayStr { get; set; }
        public string? HideifEmpty_16964 { get; set; }
        public string? LTgoalisempty_16965 { get; set; }
        public int? LTgoalisempty_16965_ResponseChoiceID { get; set; }
        public string? crisisgoalisempty_16966 { get; set; }
        public int? crisisgoalisempty_16966_ResponseChoiceID { get; set; }
        public string? Othergoalisempty_16967 { get; set; }
        public int? Othergoalisempty_16967_ResponseChoiceID { get; set; }
        public string? ClosestatusofPlannedAction_22338 { get; set; }
        public int? ClosestatusofPlannedAction_22338_ResponseChoiceID { get; set; }
        public int? AssignedtoStaffMember_22728 { get; set; }
        public int? Selectyourname_24635 { get; set; }
        public int? Whichgoalwasthisfor_29382 { get; set; }
        public int? Whichgoalwasthisfor_29382_SourceFormID { get; set; }
        public string? Whichgoalwasthisfor_29382_DisplayStr { get; set; }
        public string? Actioncreatedby_29503 { get; set; }
        public string? RiskLevel_33169 { get; set; }
        public int? RiskLevel_33169_ResponseChoiceID { get; set; }
        public string? FName { get; set; }
        public string? LName { get; set; }
    }
}
