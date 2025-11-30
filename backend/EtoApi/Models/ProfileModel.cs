namespace EtoApi.Models
{
    public class Profile
    {
        public string? FName { get; set;}
        public string? LName { get; set;}

        public string? Role { get; set;}

        public int? SiteID { get; set;}

        public string? Email { get; set; }
        public string? UserName { get; set;}

        public bool? DefaultSelect { get; set;}

        public bool? EditOwnCaseLoad { get; set;}
        public bool? EditOthersCaseLoad { get; set;}
        public bool? ViewClientsNotInCaseLoad { get; set;}      
        public bool? EditClientsNotInCaseLoad { get; set; }

        public int? ProgramID { get; set; }


    }
}