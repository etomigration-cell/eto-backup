namespace EtoApi.Models
{
    public class ParticipantProgramHistory
{
    public int? CLID { get; set; }
    public string ProgramName { get; set; }
    public DateTime? ProgramStartDate { get; set; }
    public DateTime? ProgramEndDate { get; set; }
    public DateTime? AuditDate { get; set; }
    public string StaffFName { get; set; }
    public string StaffLName { get; set; }
}

}
