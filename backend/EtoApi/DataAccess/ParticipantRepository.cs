using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class ParticipantRepository
    {
        private readonly string _connectionString;

        public ParticipantRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<ParticipantDetails> GetParticipantByIdAsync(int id)
        {
                return new ParticipantDetails
                {
                    Id = 1,
                    Name = "Alice Smith",
                    FirstName = "Alice",
                    MiddleName = "Marie",
                    LastName = "Smith",
                    Alias = "Ali",
                    ParticipantImage = "https://example.com/avatar/alice_smith.jpg",
                    CaseNumber = 1001,
                    RealOrFake = "Real",
                    DOB = new DateTime(1990, 2, 1),
                    DobAccuracy = "AAA - Day, month and year are accurate",
                    DateOfDeath = null,
                    CRN = "CRN1001",
                    SRSID = "SRS1001",
                    Sex = "Female",
                    Gender = "Woman",
                    SexualIdentity = "Heterosexual",
                    SexualIdentityOther = null,
                    DateOfFirstMicahContact = new DateTime(2025, 1, 15),
                    InitialContactType = "Email",
                    ReferralSourceMP = "Self referral",
                    AboriginalTorresStraitIslander = "Neither Aboriginal nor Torres Strait Islander",
                    SouthSeaIslander = "No",
                    CALD = "No/False",
                    CitizenshipStatus = "Australian Citizen",
                    CountryOfBirth = "Australia",
                    YearOfArrival = null,
                    CommunicationMethod = "Phone",
                    InterpreterRequired = "No",
                    SpokenLanguageOtherThanEnglish = null,
                    NonSpokenLanguage = null,
                    NonSpokenOther = null,
                    AdfMember = "No",
                    MedicareNumber = "2222 33333 4",
                    MedicareIndividualId = "2",
                    AgedCareId = "AGCA123",
                    NdisNumber = "NDIS-A1001",
                    Disability = "No",
                    PrimaryDisabilityGroup = null,
                    NeedsHelpOrSupervision = "No",
                    Email = "alice.smith@example.com",
                    ProgramStartDate = new DateTime(2025, 1, 1)
                };
            
        }
    }
}
