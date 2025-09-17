using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class SupportPeriodRepository
    {
        private readonly string _connectionString;

        public SupportPeriodRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<List<SupportPeriod>> GetSupportPeriodByIdAsync(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                SELECT
                    frm.FormResponseID,
                    frm.FormIdentifier,
                    sub.Name,
                    frm.GroupID,
                    frm.FamilyID,
                    frm.ResponseSetID,
                    frm.FormID,
                    frm.CollectionTypeID,
                    frm.SubjectTypeID,
                    frm.CollectionID,
                    frm.ResponseCreatedDate,
                    prg.ProgramName,
                    frm.AuditStaffID,
                    frm.AuditDate,
                    frm.DataEnteredByID,
                    frm.DraftSavedOn,
                    frm.RemovedDate,
                    frm.SelectTheReasonThatTheSupportPeriodEnded_16784,
                    frm.SelectTheReasonThatTheSupportPeriodEnded_16784_ResponseChoiceID,
                    frm.AihwGender_16785,
                    frm.AihwGender_16785_ResponseChoiceID,
                    frm.GenderFromDemographics_16786,
                    frm.WhatIsTheStartDateOfTheSupportPeriod_16787,
                    frm.WhatIsTheEndDateOfTheSupportPeriodOnlyCompleteThisWhenTheSupportPeriodHasEnded_16788,
                    e.EntityName,
                    frm.SubmitsSHSAIHWreports_16795,
                    frm.AIHWOrganisationID_16875,
                    frm.Whatwastheparticipantssourceofformalreferraltothisagency_16876,
                    frm.Whatwastheparticipantssourceofformalreferraltothisagency_16876_ResponseChoiceID,
                    frm.Confirmthatconsentwasgiventoprovidenonidentifieddataforgovernmentreporting_17491,
                    frm.Confirmthatconsentwasgiventoprovidenonidentifieddataforgovernmentreporting_17491_ResponseChoiceID,
                    frm.ConfirmAIHW_17493,
                    frm.ConfirmAIHW_17493_ResponseChoiceID,
                    frm.HideMe_17496,
                    frm.WasthefamilyparticipantinsecureandsustainablehousingatthecloseofthissupportperiodSHSteamsMUSTa_19933,
                    frm.WasthefamilyparticipantinsecureandsustainablehousingatthecloseofthissupportperiodSHSteamsMUSTa_19933_ResponseChoiceID,
                    frm.Onwhatdatewasassistanceoriginallyrequested_20036,
                    frm.IstheSupportPeriodongoingorhasitended_20572,
                    frm.IstheSupportPeriodongoingorhasitended_20572_ResponseChoiceID,
                    frm.AIHWOrgAgencyName_21813,
                    frm.HasthispersonfamilyreceivedservicesfromthisteaminthepastRecordedeitherinSRSETOorother_22184,
                    frm.HasthispersonfamilyreceivedservicesfromthisteaminthepastRecordedeitherinSRSETOorother_22184_ResponseChoiceID,
                    frm.SRSSupportPdID_22314,
                    frm.WhatistheparticipantsselfassessedEnglishproficiency_24801,
                    frm.WhatistheparticipantsselfassessedEnglishproficiency_24801_ResponseChoiceID,
                    frm.DoestheParticipantspeakalanguageotherthanEnglishathome_24803,
                    frm.DoestheParticipantspeakalanguageotherthanEnglishathome_24803_ResponseChoiceID,
                    frm.LanguageSpokenatHome_24975,
                    frm.AgeOfparticipant_24977,
                    frm.Age_27257,
                    frm.Wasthecarefinderclientfeedbacksurveyofferred_31682,
                    frm.Wasthecarefinderclientfeedbacksurveyofferred_31682_ResponseChoiceID,
                    frm.MainLanguageatHome_33264,
                    frm.LanguageProficiency_33265,
                    frm.LanguageProficiency_33265_ResponseChoiceID,
                    frm.SAMMensProgramonlywhatwasthereasonforthesupportperiodending_33335,
                    frm.SAMMensProgramonlywhatwasthereasonforthesupportperiodending_33335_ResponseChoiceID,
                    s.FName,
                    s.LName
                FROM form.f_308 frm
                JOIN Staff s ON frm.AuditStaffID = s.StaffID
                JOIN Entities e ON e.EntityID = frm.MicahTeam_16790
                JOIN SubjectType sub ON sub.SubjectTypeID = frm.SubjectTypeID
                JOIN Programs prg ON prg.ProgramID = frm.ProgramID
                WHERE frm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id)";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var supportPeriods = new List<SupportPeriod>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                supportPeriods.Add(new SupportPeriod
                {
                    FormResponseID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    FormIdentifier = reader.IsDBNull(1) ? (int?)null : reader.GetInt32(1),
                    SubjectName = reader.IsDBNull(2) ? null : reader.GetString(2),
                    GroupID = reader.IsDBNull(3) ? (int?)null : reader.GetInt32(3),
                    FamilyID = reader.IsDBNull(4) ? (int?)null : reader.GetInt32(4),
                    ResponseSetID = reader.IsDBNull(5) ? (int?)null : reader.GetInt32(5),
                    FormID = reader.IsDBNull(6) ? (int?)null : reader.GetInt32(6),
                    CollectionTypeID = reader.IsDBNull(7) ? (int?)null : reader.GetInt32(7),
                    SubjectTypeID = reader.IsDBNull(8) ? (int?)null : reader.GetInt32(8),
                    CollectionID = reader.IsDBNull(9) ? (int?)null : reader.GetInt32(9),
                    ResponseCreatedDate = reader.IsDBNull(10) ? (DateTime?)null : reader.GetDateTime(10),
                    ProgramName = reader.IsDBNull(11) ? null : reader.GetString(11),
                    AuditStaffID = reader.IsDBNull(12) ? (int?)null : reader.GetInt32(12),
                    AuditDate = reader.IsDBNull(13) ? (DateTime?)null : reader.GetDateTime(13),
                    DataEnteredByID = reader.IsDBNull(14) ? (int?)null : reader.GetInt32(14),
                    DraftSavedOn = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    RemovedDate = reader.IsDBNull(16) ? (DateTime?)null : reader.GetDateTime(16),
                    SelectTheReasonThatTheSupportPeriodEnded_16784 = reader.IsDBNull(17) ? null : reader.GetString(17),
                    SelectTheReasonThatTheSupportPeriodEnded_16784_ResponseChoiceID = reader.IsDBNull(18) ? (int?)null : reader.GetInt32(18),
                    AihwGender_16785 = reader.IsDBNull(19) ? null : reader.GetString(19),
                    AihwGender_16785_ResponseChoiceID = reader.IsDBNull(20) ? (int?)null : reader.GetInt32(20),
                    GenderFromDemographics_16786 = reader.IsDBNull(21) ? null : reader.GetString(21),
                    WhatIsTheStartDateOfTheSupportPeriod_16787 = reader.IsDBNull(22) ? (DateTime?)null : reader.GetDateTime(22),
                    WhatIsTheEndDateOfTheSupportPeriodOnlyCompleteThisWhenTheSupportPeriodHasEnded_16788 = reader.IsDBNull(23) ? (DateTime?)null : reader.GetDateTime(23),
                    EntityName = reader.IsDBNull(24) ? null : reader.GetString(24),
                    SubmitsSHSAIHWreports_16795 = reader.IsDBNull(25) ? null : reader.GetString(25),
                    AIHWOrganisationID_16875 = reader.IsDBNull(26) ? null : reader.GetString(26),
                    Whatwastheparticipantssourceofformalreferraltothisagency_16876 = reader.IsDBNull(27) ? null : reader.GetString(27),
                    Whatwastheparticipantssourceofformalreferraltothisagency_16876_ResponseChoiceID = reader.IsDBNull(28) ? (int?)null : reader.GetInt32(28),
                    Confirmthatconsentwasgiventoprovidenonidentifieddataforgovernmentreporting_17491 = reader.IsDBNull(29) ? null : reader.GetString(29),
                    Confirmthatconsentwasgiventoprovidenonidentifieddataforgovernmentreporting_17491_ResponseChoiceID = reader.IsDBNull(30) ? (int?)null : reader.GetInt32(30),
                    ConfirmAIHW_17493 = reader.IsDBNull(31) ? null : reader.GetString(31),
                    ConfirmAIHW_17493_ResponseChoiceID = reader.IsDBNull(32) ? (int?)null : reader.GetInt32(32),
                    HideMe_17496 = reader.IsDBNull(33) ? null : reader.GetString(33),
                    WasthefamilyparticipantinsecureandsustainablehousingatthecloseofthissupportperiodSHSteamsMUSTa_19933 = reader.IsDBNull(34) ? null : reader.GetString(34),
                    WasthefamilyparticipantinsecureandsustainablehousingatthecloseofthissupportperiodSHSteamsMUSTa_19933_ResponseChoiceID = reader.IsDBNull(35) ? (int?)null : reader.GetInt32(35),
                    Onwhatdatewasassistanceoriginallyrequested_20036 = reader.IsDBNull(36) ? (DateTime?)null : reader.GetDateTime(36),
                    IstheSupportPeriodongoingorhasitended_20572 = reader.IsDBNull(37) ? null : reader.GetString(37),
                    IstheSupportPeriodongoingorhasitended_20572_ResponseChoiceID = reader.IsDBNull(38) ? (int?)null : reader.GetInt32(38),
                    AIHWOrgAgencyName_21813 = reader.IsDBNull(39) ? null : reader.GetString(39),
                    HasthispersonfamilyreceivedservicesfromthisteaminthepastRecordedeitherinSRSETOorother_22184 = reader.IsDBNull(40) ? null : reader.GetString(40),
                    HasthispersonfamilyreceivedservicesfromthisteaminthepastRecordedeitherinSRSETOorother_22184_ResponseChoiceID = reader.IsDBNull(41) ? (int?)null : reader.GetInt32(41),
                    SRSSupportPdID_22314 = reader.IsDBNull(42) ? (decimal?)null : reader.GetDecimal(42),
                    WhatistheparticipantsselfassessedEnglishproficiency_24801 = reader.IsDBNull(43) ? null : reader.GetString(43),
                    WhatistheparticipantsselfassessedEnglishproficiency_24801_ResponseChoiceID = reader.IsDBNull(44) ? (int?)null : reader.GetInt32(44),
                    DoestheParticipantspeakalanguageotherthanEnglishathome_24803 = reader.IsDBNull(45) ? null : reader.GetString(45),
                    DoestheParticipantspeakalanguageotherthanEnglishathome_24803_ResponseChoiceID = reader.IsDBNull(46) ? (int?)null : reader.GetInt32(46),
                    LanguageSpokenatHome_24975 = reader.IsDBNull(47) ? null : reader.GetString(47),
                    AgeOfparticipant_24977 = reader.IsDBNull(48) ? (decimal?)null : reader.GetDecimal(48),
                    Age_27257 = reader.IsDBNull(49) ? (decimal?)null : reader.GetDecimal(49),
                    Wasthecarefinderclientfeedbacksurveyofferred_31682 = reader.IsDBNull(50) ? null : reader.GetString(50),
                    Wasthecarefinderclientfeedbacksurveyofferred_31682_ResponseChoiceID = reader.IsDBNull(51) ? (int?)null : reader.GetInt32(51),
                    MainLanguageatHome_33264 = reader.IsDBNull(52) ? null : reader.GetString(52),
                    LanguageProficiency_33265 = reader.IsDBNull(53) ? null : reader.GetString(53),
                    LanguageProficiency_33265_ResponseChoiceID = reader.IsDBNull(54) ? (int?)null : reader.GetInt32(54),
                    SAMMensProgramonlywhatwasthereasonforthesupportperiodending_33335 = reader.IsDBNull(55) ? null : reader.GetString(55),
                    SAMMensProgramonlywhatwasthereasonforthesupportperiodending_33335_ResponseChoiceID = reader.IsDBNull(56) ? (int?)null : reader.GetInt32(56),
                    FName = reader.IsDBNull(57) ? null : reader.GetString(57),
                    LName = reader.IsDBNull(58) ? null : reader.GetString(58)
                });
            }

            return supportPeriods;
        }
    }
}
