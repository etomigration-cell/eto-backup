namespace EtoApi.Models
{
public class ParticipantDetails
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? FirstName { get; set; }
    public string? MiddleName { get; set; }
    public string? LastName { get; set; }
    public string? Alias { get; set; }
    public string? ParticipantImage { get; set; }
    public int? CaseNumber { get; set; }
    public string? RealOrFake { get; set; }
    public DateTime DOB { get; set; }
    public string? DobAccuracy { get; set; }
    public DateTime? DateOfDeath { get; set; }
    public string? CRN { get; set; }
    public string? SRSID { get; set; }
    public string? Sex { get; set; }
    public string? Gender { get; set; }
    public string? SexualIdentity { get; set; }
    public string? SexualIdentityOther { get; set; }
    public DateTime DateOfFirstMicahContact { get; set; }
    public string? InitialContactType { get; set; }
    public string? ReferralSourceMP { get; set; }
    public string? AboriginalTorresStraitIslander { get; set; }
    public string? SouthSeaIslander { get; set; }
    public string? CALD { get; set; }
    public string? CitizenshipStatus { get; set; }
    public string? CountryOfBirth { get; set; }
    public int? YearOfArrival { get; set; }
    public string? CommunicationMethod { get; set; }
    public string? InterpreterRequired { get; set; }
    public string? SpokenLanguageOtherThanEnglish { get; set; }
    public string? NonSpokenLanguage { get; set; }
    public string? NonSpokenOther { get; set; }
    public string? AdfMember { get; set; }
    public string? MedicareNumber { get; set; }
    public string? MedicareIndividualId { get; set; }
    public string? AgedCareId { get; set; }
    public string? NdisNumber { get; set; }
    public string? Disability { get; set; }
    public string? PrimaryDisabilityGroup { get; set; }
    public string? NeedsHelpOrSupervision { get; set; }
    public string? Email { get; set; }
    public DateTime ProgramStartDate { get; set; }
}
}
