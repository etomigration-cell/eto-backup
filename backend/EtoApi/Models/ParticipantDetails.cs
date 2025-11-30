namespace EtoApi.Models
{
    public class ParticipantDetails
    {
        public int CLID { get; set; }
        public string? SSN { get; set; }
        public string CaseNumber { get; set; }
        public string? FName { get; set; }
        public string? MiddleInitial { get; set; }
        public string? LName { get; set; }
        public bool? Disabled { get; set; }
        public int? PrefixID { get; set; }
        public int? SuffixID { get; set; }
        public int? EthnicityID { get; set; }
        public DateTime DOB { get; set; }
        public string? Address1 { get; set; }
        public string? Address2 { get; set; }
        public string? ZipCode { get; set; }
        public string? HomePhone { get; set; }
        public string? CellPhone { get; set; }
        public string? WorkPhone { get; set; }
        public string? WorkPhoneExtension { get; set; }
        public string? Pager { get; set; }
        public string? Email { get; set; }
        public bool? Gender { get; set; }
        public int? MaritalStatusID { get; set; }
        public int? FundingEntityID { get; set; }
        public int? ReferralEntityID { get; set; }
        public int? AuditStaffID { get; set; }
        public DateTime? AuditDate { get; set; }
        public int? AssignedStaffID { get; set; }
        public DateTime? DateCreated { get; set; }
        public string? Alert { get; set; }
        public int? HoR_ID { get; set; }
        public int? HoR_ChildID { get; set; }
        public int? HoR_BID { get; set; }
        public int? HoR_IDAbuser { get; set; }
        public int? HoR_VID { get; set; }
        public string? ClientGUID { get; set; }
        public int? TigerID { get; set; }
        public string? CensusTract { get; set; }
        public string? CensusBlock { get; set; }
        public int? CLID_Source { get; set; }
        public string? ZipExtension { get; set; }
        public bool? OptOut { get; set; }
        public bool? ReferralNotification { get; set; }
        public int? CSiteID { get; set; }
        public string? ContactMethod { get; set; }
        public string? ContactLocation { get; set; }
        public string? CRN { get; set; }
        public string? AboriginalTorresStraitSouthSeaIslander { get; set; }
        public string? PhotographConsent { get; set; }
        public string? Inwhatlanguagedoyoufeelbestabletoexpressyourself { get; set; }
        public string? Nickname { get; set; }
        public string? GenderIfincorrect { get; set; }
        public Dictionary<string, string?> Demographics { get; set; } = new();
        public string? StaffFName { get; set; }
        public string? StaffLName { get; set; }
    }
}
