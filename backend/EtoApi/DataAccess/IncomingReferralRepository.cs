using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class IncomingReferralRepository
    {
       private readonly ISqlConnectionFactory _connectionFactory;

        public IncomingReferralRepository(ISqlConnectionFactory connectionFactory)
            {
                _connectionFactory = connectionFactory;
            }


        public async Task<List<IncomingReferral>> GetIncomingReferralByIdAsync(int id)
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
                prg.ProgramName,
                s.AuditStaffID,
                frm.AuditDate,
                DataEnteredByID,
                DraftSavedOn,
                RemovedDate,
                e.EntityName,
                Referredfrom_16526,
                WasthisreferralreceivedviaSRS_16527,
                WasthisreferralreceivedviaSRS_16527_ResponseChoiceID,
                ScannedDocuments_16529,
                Referralreviewedon_16530,
                ReferralReviewedby_16531,
                Referralaccepted_16532,
                Referralaccepted_16532_ResponseChoiceID,
                ReferralrejectedReason_16534,
                ReferralrejectedReason_16534_ResponseChoiceID,
                Referralreceivedon_17503,
                YouhaveindicatedtheSLMSteamIsthisaPoliceReferral_20973,
                YouhaveindicatedtheSLMSteamIsthisaPoliceReferral_20973_ResponseChoiceID,
                Referralreceivetime_20977,
                ignore_20978,
                ViolenceType_20979,
                ViolenceType_20979_ResponseChoiceID,
                PersonType_20980,
                PersonType_20980_ResponseChoiceID,
                InitialContactBesuretoalsocompleteotherrelevantTouchPoints_20982,
                InitialContactBesuretoalsocompleteotherrelevantTouchPoints_20982_ResponseChoiceID,
                EmergencyExaminationAuthority_21263,
                EmergencyExaminationAuthority_21263_ResponseChoiceID,
                Comments_27878,
                Isthisfora_27879,
                Isthisfora_27879_ResponseChoiceID,
                Whatwastheselfreferralcontacttype_28394,
                Whatwastheselfreferralcontacttype_28394_ResponseChoiceID,
                Doesthepersonhaveaccessibilityneeds_28595,
                Doesthepersonhaveaccessibilityneeds_28595_ResponseChoiceID,
                HRT_28859,
                HRT_28859_ResponseChoiceID,
                Referredonto_28860,
                Referredonto_28860_ResponseChoiceID,
                WhichMicahTeamwasthereferralmadeto_30045,
                Whichexternalservicewasthereferralmadeto_30046,
                ImmediateNeeds_30047,
                HealthIssues_30048,
                Housingsituation_30049,
                IntakeReferralOrgPath_33182,
                IntakeClientKey_33183,
                IntakeEpisodeKey_33184,
                IsthisarediCASEReferral_33186,
                IsthisarediCASEReferral_33186_ResponseChoiceID,
                s.FName,
                s.LName
                FROM form.f_304 frm
                JOIN Staff s ON frm.AuditStaffID = s.StaffID
                JOIN Entities e ON e.EntityID = frm.MicahTeam_16524
                JOIN SubjectType sub ON sub.SubjectTypeID = frm.SubjectTypeID
                JOIN Programs prg ON prg.ProgramID = frm.ProgramID
                WHERE frm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id)";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var incomingReferral = new List<IncomingReferral>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                incomingReferral.Add(new IncomingReferral
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
                    ProgramID = reader.IsDBNull(11) ? null : reader.GetString(11),
                    AuditStaffID = reader.IsDBNull(12) ? (int?)null : reader.GetInt32(12),
                    AuditDate = reader.IsDBNull(13) ? (DateTime?)null : reader.GetDateTime(13),
                    DataEnteredByID = reader.IsDBNull(14) ? (int?)null : reader.GetInt32(14),
                    DraftSavedOn = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    RemovedDate = reader.IsDBNull(16) ? (DateTime?)null : reader.GetDateTime(16),
                    MicahTeam_16524 = reader.IsDBNull(17) ? null : reader.GetString(17),
                    Referredfrom_16526 = reader.IsDBNull(18) ? (int?)null : reader.GetInt32(18),
                    WasthisreferralreceivedviaSRS_16527 = reader.IsDBNull(19) ? null : reader.GetString(19),
                    WasthisreferralreceivedviaSRS_16527_ResponseChoiceID = reader.IsDBNull(20) ? (int?)null : reader.GetInt32(20),
                    ScannedDocuments_16529 = reader.IsDBNull(21) ? (int?)null : reader.GetInt32(21),
                    Referralreviewedon_16530 = reader.IsDBNull(22) ? (DateTime?)null : reader.GetDateTime(22),
                    ReferralReviewedby_16531 = reader.IsDBNull(23) ? (int?)null : reader.GetInt32(23),
                    Referralaccepted_16532 = reader.IsDBNull(24) ? null : reader.GetString(24),
                    Referralaccepted_16532_ResponseChoiceID = reader.IsDBNull(25) ? (int?)null : reader.GetInt32(25),
                    ReferralrejectedReason_16534 = reader.IsDBNull(26) ? null : reader.GetString(26),
                    ReferralrejectedReason_16534_ResponseChoiceID = reader.IsDBNull(27) ? (int?)null : reader.GetInt32(27),
                    Referralreceivedon_17503 = reader.IsDBNull(28) ? (DateTime?)null : reader.GetDateTime(28),
                    YouhaveindicatedtheSLMSteamIsthisaPoliceReferral_20973 = reader.IsDBNull(29) ? null : reader.GetString(29),
                    YouhaveindicatedtheSLMSteamIsthisaPoliceReferral_20973_ResponseChoiceID = reader.IsDBNull(30) ? (int?)null : reader.GetInt32(30),
                    Referralreceivetime_20977 = reader.IsDBNull(31) ? null : reader.GetString(31),
                    ignore_20978 = reader.IsDBNull(32) ? null : reader.GetString(32),
                    ViolenceType_20979 = reader.IsDBNull(33) ? null : reader.GetString(33),
                    ViolenceType_20979_ResponseChoiceID = reader.IsDBNull(34) ? (int?)null : reader.GetInt32(34),
                    PersonType_20980 = reader.IsDBNull(35) ? null : reader.GetString(35),
                    PersonType_20980_ResponseChoiceID = reader.IsDBNull(36) ? (int?)null : reader.GetInt32(36),
                    InitialContactBesuretoalsocompleteotherrelevantTouchPoints_20982 = reader.IsDBNull(37) ? null : reader.GetString(37),
                    InitialContactBesuretoalsocompleteotherrelevantTouchPoints_20982_ResponseChoiceID = reader.IsDBNull(38) ? (int?)null : reader.GetInt32(38),
                    EmergencyExaminationAuthority_21263 = reader.IsDBNull(39) ? null : reader.GetString(39),
                    EmergencyExaminationAuthority_21263_ResponseChoiceID = reader.IsDBNull(40) ? (int?)null : reader.GetInt32(40),
                    Comments_27878 = reader.IsDBNull(41) ? null : reader.GetString(41),
                    Isthisfora_27879 = reader.IsDBNull(42) ? null : reader.GetString(42),
                    Isthisfora_27879_ResponseChoiceID = reader.IsDBNull(43) ? (int?)null : reader.GetInt32(43),
                    Whatwastheselfreferralcontacttype_28394 = reader.IsDBNull(44) ? null : reader.GetString(44),
                    Whatwastheselfreferralcontacttype_28394_ResponseChoiceID = reader.IsDBNull(45) ? (int?)null : reader.GetInt32(45),
                    Doesthepersonhaveaccessibilityneeds_28595 = reader.IsDBNull(46) ? null : reader.GetString(46),
                    Doesthepersonhaveaccessibilityneeds_28595_ResponseChoiceID = reader.IsDBNull(47) ? (int?)null : reader.GetInt32(47),
                    HRT_28859 = reader.IsDBNull(48) ? null : reader.GetString(48),
                    HRT_28859_ResponseChoiceID = reader.IsDBNull(49) ? (int?)null : reader.GetInt32(49),
                    Referredonto_28860 = reader.IsDBNull(50) ? null : reader.GetString(50),
                    Referredonto_28860_ResponseChoiceID = reader.IsDBNull(51) ? (int?)null : reader.GetInt32(51),
                    WhichMicahTeamwasthereferralmadeto_30045 = reader.IsDBNull(52) ? (int?)null : reader.GetInt32(52),
                    Whichexternalservicewasthereferralmadeto_30046 = reader.IsDBNull(53) ? (int?)null : reader.GetInt32(53),
                    ImmediateNeeds_30047 = reader.IsDBNull(54) ? null : reader.GetString(54),
                    HealthIssues_30048 = reader.IsDBNull(55) ? null : reader.GetString(55),
                    Housingsituation_30049 = reader.IsDBNull(56) ? null : reader.GetString(56),
                    IntakeReferralOrgPath_33182 = reader.IsDBNull(57) ? null : reader.GetString(57),
                    IntakeClientKey_33183 = reader.IsDBNull(58) ? (int?)null : reader.GetInt32(58),
                    IntakeEpisodeKey_33184 = reader.IsDBNull(59) ? (int?)null : reader.GetInt32(59),
                    IsthisarediCASEReferral_33186 = reader.IsDBNull(60) ? null : reader.GetString(60),
                    IsthisarediCASEReferral_33186_ResponseChoiceID = reader.IsDBNull(61) ? (int?)null : reader.GetInt32(61),
                    FName = reader.IsDBNull(57) ? null : reader.GetString(57),
                    LName = reader.IsDBNull(58) ? null : reader.GetString(58)
                });
            }

            return incomingReferral;
        }
    }
}
