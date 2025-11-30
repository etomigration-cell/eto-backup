using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class LotusInitialFormRepository
    {
       private readonly ISqlConnectionFactory _connectionFactory;

        public LotusInitialFormRepository(ISqlConnectionFactory connectionFactory)
            {
                _connectionFactory = connectionFactory;
            }

        public async Task<List<LotusInitialForm>> GetLotusInitialFormByIdAsync(int id)
        {
             using var connection = await _connectionFactory.CreateOpenConnectionAsync();

            var query = @"
                SELECT
                    FormResponseID,
                    FormIdentifier,
                    SubjectID,
                    GroupID,
                    FamilyID,
                    ResponseSetID,
                    FormID,
                    CollectionTypeID,
                    frm.SubjectTypeID,
                    CollectionID,
                    ResponseCreatedDate,
                    frm.ProgramID,
                    frm.AuditStaffID,
                    frm.AuditDate,
                    DataEnteredByID,
                    DraftSavedOn,
                    RemovedDate,
                    ContactMethod_27264,
                    ContactMethod_27264_ResponseChoiceID,
                    ContactLocation_27265,
                    ContactLocation_27265_ResponseChoiceID,
                    PhoneContactType_27266,
                    PhoneContactType_27266_ResponseChoiceID,
                    Ifcontactlocationisotherpleasespecify_27267,
                    HowmanystaffdidthistogetherAtmost4_27268,
                    TimespentwithparticipantPerstaffmember_27269,
                    TimespentonbehalfofparticipantPerstaffmember_27270,
                    TimespenttravellingNotwithparticipantPerstaffmember_27271,
                    Totaltimespentwithparticipant_27272,
                    Totaltimespentonbehalfofparticipant_27273,
                    Totaltimespenttravelling_27274,
                    Totalefforttimeforparticipant_27275,
                    Selectyourname_27276,
                    MicahTeam_27277,
                    Selectthe2ndstaffperson_27278,
                    Whatotherteamassisted_27279,
                    Howdidyoufindoutaboutourservice_27283,
                    Howdidyoufindoutaboutourservice_27283_ResponseChoiceID,
                    Preferredcounsellingsupportvia_27293,
                    Preferredcounsellingsupportvia_27293_ResponseChoiceID,
                    Areyouthepersonwithadisability_27299,
                    Areyouthepersonwithadisability_27299_ResponseChoiceID,
                    Disabilityimpairmentorconditionindicator_27304,
                    Disabilityimpairmentorconditionindicator_27304_ResponseChoiceID,
                    LanguageSpokenatHomeotherthanEnglish_27305,
                    Mainsourceofincome_27313,
                    Mainsourceofincome_27313_ResponseChoiceID,
                    Selectallofthereasonsforseekingassistance_27321,
                    Selectallofthereasonsforseekingassistance_27321_ResponseChoiceID,
                    Selectyourlocation_27324,
                    Selectyourlocation_27324_ResponseChoiceID,
                    MailingList_27329,
                    MailingList_27329_ResponseChoiceID,
                    Areyouworkingwithanyotherservices_27331,
                    Referredby_27332,
                    EligibleforLotusServices_27333,
                    EligibleforLotusServices_27333_ResponseChoiceID,
                    EligibleDate_27334,
                    IneligibleDate_27335,
                    OtherReasons_27336,
                    Historyasachild_27338,
                    Historyasachild_27338_ResponseChoiceID,
                    Historyasanadult_27340,
                    Historyasanadult_27340_ResponseChoiceID,
                    ChildProtection_27342,
                    ChildProtection_27342_ResponseChoiceID,
                    Otherorders_27343,
                    Otherorders_27343_ResponseChoiceID,
                    Name_27476,
                    ContactDetails_27478,
                    PermissiontoContact_27479,
                    PermissiontoContact_27479_ResponseChoiceID,
                    BirthCertificate_27482,
                    MedicareCard_27483,
                    DriversLicense18Card_27484,
                    Other_27485,
                    EducationStatus_27487,
                    EducationStatus_27487_ResponseChoiceID,
                    Detailsofbeinginstitutionalizedasachild_27857,
                    Detailsonhistoryofbeinginstitutionalizedasanadult_27858,
                    DoestheParticipantspeakalanguageotherthanEnglishathome_28294,
                    DoestheParticipantspeakalanguageotherthanEnglishathome_28294_ResponseChoiceID,
                    prg.ProgramName,
                    e.EntityName,
                    s.FName,
                    s.LName
                    FROM form.f_523 frm
                    JOIN Staff s ON frm.AuditStaffID = s.StaffID
                    JOIN Entities e ON e.EntityID = frm.MicahTeam_27277
                    JOIN SubjectType sub ON sub.SubjectTypeID = frm.SubjectTypeID
                    JOIN Programs prg ON prg.ProgramID = frm.ProgramID
                    WHERE frm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id) ORDER BY frm.AuditDate DESC";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var lotusInitialForms = new List<LotusInitialForm>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                lotusInitialForms.Add(new LotusInitialForm
                {
                    FormResponseID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    FormIdentifier = reader.IsDBNull(1) ? null : reader.GetString(1),
                    SubjectID = reader.IsDBNull(2) ? (int?)null : reader.GetInt32(2),
                    GroupID = reader.IsDBNull(3) ? (int?)null : reader.GetInt32(3),
                    FamilyID = reader.IsDBNull(4) ? (int?)null : reader.GetInt32(4),
                    ResponseSetID = reader.IsDBNull(5) ? (int?)null : reader.GetInt32(5),
                    FormID = reader.IsDBNull(6) ? (int?)null : reader.GetInt32(6),
                    CollectionTypeID = reader.IsDBNull(7) ? (int?)null : reader.GetInt32(7),
                    SubjectTypeID = reader.IsDBNull(8) ? (int?)null : reader.GetInt32(8),
                    CollectionID = reader.IsDBNull(9) ? (int?)null : reader.GetInt32(9),
                    ResponseCreatedDate = reader.IsDBNull(10) ? (DateTime?)null : reader.GetDateTime(10),
                    ProgramID = reader.IsDBNull(11) ? (int?)null : reader.GetInt16(11),
                    AuditStaffID = reader.IsDBNull(12) ? (int?)null : reader.GetInt32(12),
                    AuditDate = reader.IsDBNull(13) ? (DateTime?)null : reader.GetDateTime(13),
                    DataEnteredByID = reader.IsDBNull(14) ? (int?)null : reader.GetInt32(14),
                    DraftSavedOn = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    RemovedDate = reader.IsDBNull(16) ? (DateTime?)null : reader.GetDateTime(16),
                    ContactMethod_27264 = reader.IsDBNull(17) ? null : reader.GetString(17),
                    ContactMethod_27264_ResponseChoiceID = reader.IsDBNull(18) ? (int?)null : reader.GetInt32(18),
                    ContactLocation_27265 = reader.IsDBNull(19) ? null : reader.GetString(19),
                    ContactLocation_27265_ResponseChoiceID = reader.IsDBNull(20) ? (int?)null : reader.GetInt32(20),
                    PhoneContactType_27266 = reader.IsDBNull(21) ? null : reader.GetString(21),
                    PhoneContactType_27266_ResponseChoiceID = reader.IsDBNull(22) ? (int?)null : reader.GetInt32(22),
                    Ifcontactlocationisotherpleasespecify_27267 = reader.IsDBNull(23) ? null : reader.GetString(23),
                    HowmanystaffdidthistogetherAtmost4_27268 = reader.IsDBNull(24) ? (decimal?)null : reader.GetDecimal(24),
                    TimespentwithparticipantPerstaffmember_27269 = reader.IsDBNull(25) ? (int?)null : reader.GetInt32(25),
                    TimespentonbehalfofparticipantPerstaffmember_27270 = reader.IsDBNull(26) ? (int?)null : reader.GetInt32(26),
                    TimespenttravellingNotwithparticipantPerstaffmember_27271 = reader.IsDBNull(27) ? (int?)null : reader.GetInt32(27),
                    Totaltimespentwithparticipant_27272 = reader.IsDBNull(28) ? (int?)null : reader.GetInt32(28),
                    Totaltimespentonbehalfofparticipant_27273 = reader.IsDBNull(29) ? (int?)null : reader.GetInt32(29),
                    Totaltimespenttravelling_27274 = reader.IsDBNull(30) ? (int?)null : reader.GetInt32(30),
                    Totalefforttimeforparticipant_27275 = reader.IsDBNull(31) ? (int?)null : reader.GetInt32(31),
                    Selectyourname_27276 = reader.IsDBNull(32) ? (int?)null : reader.GetInt32(32),
                    MicahTeam_27277 = reader.IsDBNull(33) ? (int?)null : reader.GetInt32(33),
                    Selectthe2ndstaffperson_27278 = reader.IsDBNull(34) ? (int?)null : reader.GetInt32(34),
                    Whatotherteamassisted_27279 = reader.IsDBNull(35) ? (int?)null : reader.GetInt32(35),
                    Howdidyoufindoutaboutourservice_27283 = reader.IsDBNull(36) ? null : reader.GetString(36),
                    Howdidyoufindoutaboutourservice_27283_ResponseChoiceID = reader.IsDBNull(37) ? (int?)null : reader.GetInt32(37),
                    Preferredcounsellingsupportvia_27293 = reader.IsDBNull(38) ? null : reader.GetString(38),
                    Preferredcounsellingsupportvia_27293_ResponseChoiceID = reader.IsDBNull(39) ? (int?)null : reader.GetInt32(39),
                    Areyouthepersonwithadisability_27299 = reader.IsDBNull(40) ? null : reader.GetString(40),
                    Areyouthepersonwithadisability_27299_ResponseChoiceID = reader.IsDBNull(41) ? (int?)null : reader.GetInt32(41),
                    Disabilityimpairmentorconditionindicator_27304 = reader.IsDBNull(42) ? null : reader.GetString(42),
                    Disabilityimpairmentorconditionindicator_27304_ResponseChoiceID = reader.IsDBNull(43) ? (int?)null : reader.GetInt32(43),
                    LanguageSpokenatHomeotherthanEnglish_27305 = reader.IsDBNull(44) ? (int?)null : reader.GetInt32(44),
                    Mainsourceofincome_27313 = reader.IsDBNull(45) ? null : reader.GetString(45),
                    Mainsourceofincome_27313_ResponseChoiceID = reader.IsDBNull(46) ? (int?)null : reader.GetInt32(46),
                    Selectallofthereasonsforseekingassistance_27321 = reader.IsDBNull(47) ? null : reader.GetString(47),
                    Selectallofthereasonsforseekingassistance_27321_ResponseChoiceID = reader.IsDBNull(48) ? (int?)null : reader.GetInt32(48),
                    Selectyourlocation_27324 = reader.IsDBNull(49) ? null : reader.GetString(49),
                    Selectyourlocation_27324_ResponseChoiceID = reader.IsDBNull(50) ? (int?)null : reader.GetInt32(50),
                    MailingList_27329 = reader.IsDBNull(51) ? null : reader.GetString(51),
                    MailingList_27329_ResponseChoiceID = reader.IsDBNull(52) ? (int?)null : reader.GetInt32(52),
                    Areyouworkingwithanyotherservices_27331 = reader.IsDBNull(53) ? null : reader.GetString(53),
                    Referredby_27332 = reader.IsDBNull(54) ? null : reader.GetString(54),
                    EligibleforLotusServices_27333 = reader.IsDBNull(55) ? null : reader.GetString(55),
                    EligibleforLotusServices_27333_ResponseChoiceID = reader.IsDBNull(56) ? (int?)null : reader.GetInt32(56),
                    EligibleDate_27334 = reader.IsDBNull(57) ? (DateTime?)null : reader.GetDateTime(57),
                    IneligibleDate_27335 = reader.IsDBNull(58) ? (DateTime?)null : reader.GetDateTime(58),
                    OtherReasons_27336 = reader.IsDBNull(59) ? null : reader.GetString(59),
                    Historyasachild_27338 = reader.IsDBNull(60) ? null : reader.GetString(60),
                    Historyasachild_27338_ResponseChoiceID = reader.IsDBNull(61) ? (int?)null : reader.GetInt32(61),
                    Historyasanadult_27340 = reader.IsDBNull(62) ? null : reader.GetString(62),
                    Historyasanadult_27340_ResponseChoiceID = reader.IsDBNull(63) ? (int?)null : reader.GetInt32(63),
                    ChildProtection_27342 = reader.IsDBNull(64) ? null : reader.GetString(64),
                    ChildProtection_27342_ResponseChoiceID = reader.IsDBNull(65) ? (int?)null : reader.GetInt32(65),
                    Otherorders_27343 = reader.IsDBNull(66) ? null : reader.GetString(66),
                    Otherorders_27343_ResponseChoiceID = reader.IsDBNull(67) ? (int?)null : reader.GetInt32(67),
                    Name_27476 = reader.IsDBNull(68) ? null : reader.GetString(68),
                    ContactDetails_27478 = reader.IsDBNull(69) ? null : reader.GetString(69),
                    PermissiontoContact_27479 = reader.IsDBNull(70) ? null : reader.GetString(70),
                    PermissiontoContact_27479_ResponseChoiceID = reader.IsDBNull(71) ? (int?)null : reader.GetInt32(71),
                    BirthCertificate_27482 = reader.IsDBNull(72) ? null : reader.GetString(72),
                    MedicareCard_27483 = reader.IsDBNull(73) ? null : reader.GetString(73),
                    DriversLicense18Card_27484 = reader.IsDBNull(74) ? (decimal?)null : reader.GetDecimal(74),
                    Other_27485 = reader.IsDBNull(75) ? null : reader.GetString(75),
                    EducationStatus_27487 = reader.IsDBNull(76) ? null : reader.GetString(76),
                    EducationStatus_27487_ResponseChoiceID = reader.IsDBNull(77) ? (int?)null : reader.GetInt32(77),
                    Detailsofbeinginstitutionalizedasachild_27857 = reader.IsDBNull(78) ? null : reader.GetString(78),
                    Detailsonhistoryofbeinginstitutionalizedasanadult_27858 = reader.IsDBNull(79) ? null : reader.GetString(79),
                    DoestheParticipantspeakalanguageotherthanEnglishathome_28294 = reader.IsDBNull(80) ? null : reader.GetString(80),
                    DoestheParticipantspeakalanguageotherthanEnglishathome_28294_ResponseChoiceID = reader.IsDBNull(81) ? (int?)null : reader.GetInt32(81),
                    ProgramName = reader.IsDBNull(82) ? null : reader.GetString(82),
                    EntityName = reader.IsDBNull(83) ? null : reader.GetString(83),
                    FName = reader.IsDBNull(84) ? null : reader.GetString(84),
                    LName = reader.IsDBNull(85) ? null : reader.GetString(85)
                });

            }
            return lotusInitialForms;
        }
    }
}
