using EtoApi.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace EtoApi.DataAccess
{
    public class MSURepository
    {
        
        private readonly ISqlConnectionFactory _connectionFactory;
        

        public MSURepository(ISqlConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public async Task<List<MSUModel>> GetMSUByIdAsync(int id)
        {
            
            using var connection = await _connectionFactory.CreateOpenConnectionAsync();

            var query = @"
                SELECT    
                    
                    frm.FormResponseID,
                    frm.FormIdentifier,
                    frm.SubjectID,
                    frm.GroupID,
                    frm.FamilyID,
                    frm.ResponseSetID,
                    frm.FormID,
                    frm.CollectionTypeID,
                    frm.SubjectTypeID,
                    frm.CollectionID,
                    frm.ResponseCreatedDate,
                    frm.ProgramID,
                    frm.AuditStaffID,
                    frm.AuditDate,
                    frm.DataEnteredByID,
                    frm.DraftSavedOn,
                    frm.RemovedDate,
                    frm.DwellingType_16392,
                    frm.DwellingType_16392_ResponseChoiceID,
                    frm.EpisodeOfHomelessness_16393,
                    frm.EpisodeOfHomelessness_16393_ResponseChoiceID,
                    frm.IfTheParticipantIsUnderTheAgeOf18AndHasACareOrProtectionOrderWhatWereTheirCareArrangements_16394,
                    frm.IfTheParticipantIsUnderTheAgeOf18AndHasACareOrProtectionOrderWhatWereTheirCareArrangements_16394_ResponseChoiceID,
                    frm.LivingArrangements_16395,
                    frm.LivingArrangements_16395_ResponseChoiceID,
                    frm.ConditionsOfOccupancy_16396,
                    frm.ConditionsOfOccupancy_16396_ResponseChoiceID,
                    frm.LabourForceStatus_16397,
                    frm.LabourForceStatus_16397_ResponseChoiceID,
                    frm.IfTheParticipantIs15yrsWhatIsTheirEmploymentStatus_16398,
                    frm.IfTheParticipantIs15yrsWhatIsTheirEmploymentStatus_16398_ResponseChoiceID,
                    frm.MainSourceOfIncome_16399,
                    frm.MainSourceOfIncome_16399_ResponseChoiceID,
                    frm.IsTheParticipantCurrentlyRegisteredForAGovernmentBenefitPensionOrAllowanceButAwaitingTheFirstP_16400,
                    frm.IsTheParticipantCurrentlyRegisteredForAGovernmentBenefitPensionOrAllowanceButAwaitingTheFirstP_16400_ResponseChoiceID,
                    frm.IsTheParticipantUndertakingFormalStudyOrTrainingEgSchoolUniversityVocationalStudiesSuchAsTafe_16401,
                    frm.IsTheParticipantUndertakingFormalStudyOrTrainingEgSchoolUniversityVocationalStudiesSuchAsTafe_16401_ResponseChoiceID,
                    frm.Tenure_16402,
                    frm.Tenure_16402_ResponseChoiceID,
                    frm.DoesThePublicTrusteeAdministerTheParticipantsPersonalFinancesMp_16420,
                    frm.DoesThePublicTrusteeAdministerTheParticipantsPersonalFinancesMp_16420_ResponseChoiceID,
                    frm.WhatTypeOfEducationtrainingIsTheParticipantEnrolledIn_16426,
                    frm.WhatTypeOfEducationtrainingIsTheParticipantEnrolledIn_16426_ResponseChoiceID,
                    frm.MicahTeam_16473,
                    frm.SelectYourName_16475,
                    frm.AtIntakeThisCareArrangementsQuestionWasAnsweredAs_16477,
                    frm.AtIntakeThisCareArrangementsQuestionWasAnsweredAs_16477_DisplayStr,
                    frm.AtIntakeThisHomelessnessQuestionWasAnsweredAs_16478,
                    frm.AtIntakeThisHomelessnessQuestionWasAnsweredAs_16478_DisplayStr,
                    frm.AtIntakeThisPublicGuardianQuestionWasAnsweredAs_16479,
                    frm.AtIntakeThisPublicGuardianQuestionWasAnsweredAs_16479_DisplayStr,
                    frm.AtIntakeThisPublicTrusteeQuestionWasAnsweredAs_16480,
                    frm.AtIntakeThisPublicTrusteeQuestionWasAnsweredAs_16480_DisplayStr,
                    frm.AtIntakeLivingArrangementsWasAnsweredAs_16481,
                    frm.AtIntakeLivingArrangementsWasAnsweredAs_16481_DisplayStr,
                    frm.AtIntakeDwellingTypeWasAnsweredAs_16482,
                    frm.AtIntakeDwellingTypeWasAnsweredAs_16482_DisplayStr,
                    frm.AtIntakeTenureWasAnsweredAs_16483,
                    frm.AtIntakeTenureWasAnsweredAs_16483_DisplayStr,
                    frm.AtIntakeConditionOfOccupancyWasAnsweredAs_16484,
                    frm.AtIntakeConditionOfOccupancyWasAnsweredAs_16484_DisplayStr,
                    frm.AtIntakeLabourForceStatusWasAnsweredAs_16485,
                    frm.AtIntakeLabourForceStatusWasAnsweredAs_16485_DisplayStr,
                    frm.AtIntakeEmploymentStatusWasAnsweredAs_16486,
                    frm.AtIntakeEmploymentStatusWasAnsweredAs_16486_DisplayStr,
                    frm.AtIntakeMainSourceOfIncomeWasAnsweredAs_16487,
                    frm.AtIntakeMainSourceOfIncomeWasAnsweredAs_16487_DisplayStr,
                    frm.AtIntakeCurrentlyRegisteredAndAwaitingFirstPaymentWasAnsweredAs_16488,
                    frm.AtIntakeCurrentlyRegisteredAndAwaitingFirstPaymentWasAnsweredAs_16488_DisplayStr,
                    frm.AtIntakeUndertakingFormalTrainingWasAnsweredAs_16489,
                    frm.AtIntakeUndertakingFormalTrainingWasAnsweredAs_16489_DisplayStr,
                    frm.AtIntakeEnrolledEducationtrainingWasAnsweredAs_16490,
                    frm.AtIntakeEnrolledEducationtrainingWasAnsweredAs_16490_DisplayStr,
                    frm.Doyouhaveanappointedsubstitutedecisionmakermp_16498,
                    frm.Doyouhaveanappointedsubstitutedecisionmakermp_16498_ResponseChoiceID,
                    frm.Selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500,
                    frm.Selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500_SourceFormID,
                    frm.Selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500_DisplayStr,
                    frm.YouindicatedthattherearenocurrentopengoalsforthisparticipantIndicatereason_16501,
                    frm.YouindicatedthattherearenocurrentopengoalsforthisparticipantIndicatereason_16501_ResponseChoiceID,
                    frm.Ifotherreasonpleasespecify_16502,
                    frm.Thinkingaboutthegoalyouselectedandothergoalstowhatextentweretheparticipantsmanagementplangoals_16503,
                    frm.Thinkingaboutthegoalyouselectedandothergoalstowhatextentweretheparticipantsmanagementplangoals_16503_ResponseChoiceID,
                    frm.Wasthereacasemanagementplanfortheparticipant_16504,
                    frm.Wasthereacasemanagementplanfortheparticipant_16504_ResponseChoiceID,
                    frm.Age_16522,
                    frm.SubmitsSHSAIHWreports_21833,
                    frm.TimespentonbehalfofparticipantPerstaffmember_23288,
                    frm.HowmanystaffdidthistogetherAtmost4_23289,
                    frm.Totaltimespentonbehalfofparticipant_23290,
                    frm.Hastheparticipantreturnedhome_28343,
                    frm.Hastheparticipantreturnedhome_28343_ResponseChoiceID,
                    frm.ParticipantAge_29347,
                    frm.Totalefforttimeforparticipant_33292,
                    s.FName,
                    s.LName,
                    sub.Name,
                    prg.ProgramName,
                    e.EntityName

                FROM form.f_300 frm
                JOIN Staff s ON frm.AuditStaffID = s.StaffID
                JOIN Entities e ON e.EntityID = frm.MicahTeam_16473
                JOIN SubjectType sub ON sub.SubjectTypeID = frm.SubjectTypeID
                JOIN Programs prg ON prg.ProgramID = frm.ProgramID
                WHERE frm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id)";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var msurepo = new List<MSUModel>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                msurepo.Add(new MSUModel
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
                    DwellingType_16392 = reader.IsDBNull(17) ? null : reader.GetString(17),
                    DwellingType_16392_ResponseChoiceID = reader.IsDBNull(18) ? (int?)null : reader.GetInt32(18),
                    EpisodeOfHomelessness_16393 = reader.IsDBNull(19) ? null : reader.GetString(19),
                    EpisodeOfHomelessness_16393_ResponseChoiceID = reader.IsDBNull(20) ? (int?)null : reader.GetInt32(20),
                    IfTheParticipantIsUnderTheAgeOf18AndHasACareOrProtectionOrderWhatWereTheirCareArrangements_16394 = reader.IsDBNull(21) ? null : reader.GetString(21),
                    IfTheParticipantIsUnderTheAgeOf18AndHasACareOrProtectionOrderWhatWereTheirCareArrangements_16394_ResponseChoiceID = reader.IsDBNull(22) ? (int?)null : reader.GetInt32(22),
                    LivingArrangements_16395 = reader.IsDBNull(23) ? null : reader.GetString(23),
                    LivingArrangements_16395_ResponseChoiceID = reader.IsDBNull(24) ? (int?)null : reader.GetInt32(24),
                    ConditionsOfOccupancy_16396 = reader.IsDBNull(25) ? null : reader.GetString(25),
                    ConditionsOfOccupancy_16396_ResponseChoiceID = reader.IsDBNull(26) ? (int?)null : reader.GetInt32(26),
                    LabourForceStatus_16397 = reader.IsDBNull(27) ? null : reader.GetString(27),
                    LabourForceStatus_16397_ResponseChoiceID = reader.IsDBNull(28) ? (int?)null : reader.GetInt32(28),
                    IfTheParticipantIs15yrsWhatIsTheirEmploymentStatus_16398 = reader.IsDBNull(29) ? null : reader.GetString(29),
                    IfTheParticipantIs15yrsWhatIsTheirEmploymentStatus_16398_ResponseChoiceID = reader.IsDBNull(30) ? (int?)null : reader.GetInt32(30),
                    MainSourceOfIncome_16399 = reader.IsDBNull(1) ? null : reader.GetString(31),
                    MainSourceOfIncome_16399_ResponseChoiceID = reader.IsDBNull(32) ? (int?)null : reader.GetInt32(32),
                    IsTheParticipantCurrentlyRegisteredForAGovernmentBenefitPensionOrAllowanceButAwaitingTheFirstP_16400 = reader.IsDBNull(33) ? null : reader.GetString(33),
                    IsTheParticipantCurrentlyRegisteredForAGovernmentBenefitPensionOrAllowanceButAwaitingTheFirstP_16400_ResponseChoiceID = reader.IsDBNull(34) ? (int?)null : reader.GetInt32(34),
                    IsTheParticipantUndertakingFormalStudyOrTrainingEgSchoolUniversityVocationalStudiesSuchAsTafe_16401 = reader.IsDBNull(35) ? null : reader.GetString(35),
                    IsTheParticipantUndertakingFormalStudyOrTrainingEgSchoolUniversityVocationalStudiesSuchAsTafe_16401_ResponseChoiceID = reader.IsDBNull(36) ? (int?)null : reader.GetInt32(36),
                    Tenure_16402 = reader.IsDBNull(37) ? null : reader.GetString(37),
                    Tenure_16402_ResponseChoiceID = reader.IsDBNull(38) ? (int?)null : reader.GetInt32(38),
                    DoesThePublicTrusteeAdministerTheParticipantsPersonalFinancesMp_16420 = reader.IsDBNull(39) ? null : reader.GetString(39),
                    DoesThePublicTrusteeAdministerTheParticipantsPersonalFinancesMp_16420_ResponseChoiceID = reader.IsDBNull(40) ? (int?)null : reader.GetInt32(40),
                    WhatTypeOfEducationtrainingIsTheParticipantEnrolledIn_16426 = reader.IsDBNull(41) ? null : reader.GetString(41),
                    WhatTypeOfEducationtrainingIsTheParticipantEnrolledIn_16426_ResponseChoiceID = reader.IsDBNull(42) ? (int?)null : reader.GetInt32(42),
                    MicahTeam_16473 = reader.IsDBNull(43) ? (int?)null : reader.GetInt32(43),
                    SelectYourName_16475 = reader.IsDBNull(44) ? (int?)null : reader.GetInt32(44),
                    AtIntakeThisCareArrangementsQuestionWasAnsweredAs_16477 = reader.IsDBNull(45) ? (int?)null : reader.GetInt32(45),
                    AtIntakeThisCareArrangementsQuestionWasAnsweredAs_16477_DisplayStr = reader.IsDBNull(46) ? null : reader.GetString(46),
                    AtIntakeThisHomelessnessQuestionWasAnsweredAs_16478 = reader.IsDBNull(47) ? (int?)null : reader.GetInt32(47),
                    AtIntakeThisHomelessnessQuestionWasAnsweredAs_16478_DisplayStr = reader.IsDBNull(48) ? null : reader.GetString(48),
                    AtIntakeThisPublicGuardianQuestionWasAnsweredAs_16479 = reader.IsDBNull(49) ? (int?)null : reader.GetInt32(49),
                    AtIntakeThisPublicGuardianQuestionWasAnsweredAs_16479_DisplayStr = reader.IsDBNull(50) ? null : reader.GetString(50),
                    AtIntakeThisPublicTrusteeQuestionWasAnsweredAs_16480 = reader.IsDBNull(51) ? (int?)null : reader.GetInt32(51),
                    AtIntakeThisPublicTrusteeQuestionWasAnsweredAs_16480_DisplayStr = reader.IsDBNull(52) ? null : reader.GetString(52),
                    AtIntakeLivingArrangementsWasAnsweredAs_16481 = reader.IsDBNull(53) ? (int?)null : reader.GetInt32(53),
                    AtIntakeLivingArrangementsWasAnsweredAs_16481_DisplayStr = reader.IsDBNull(54) ? null : reader.GetString(54),
                    AtIntakeDwellingTypeWasAnsweredAs_16482 = reader.IsDBNull(55) ? (int?)null : reader.GetInt32(55),
                    AtIntakeDwellingTypeWasAnsweredAs_16482_DisplayStr = reader.IsDBNull(56) ? null : reader.GetString(56),
                    AtIntakeTenureWasAnsweredAs_16483 = reader.IsDBNull(57) ? (int?)null : reader.GetInt32(57),
                    AtIntakeTenureWasAnsweredAs_16483_DisplayStr = reader.IsDBNull(58) ? null : reader.GetString(58),
                    AtIntakeConditionOfOccupancyWasAnsweredAs_16484 = reader.IsDBNull(59) ? (int?)null : reader.GetInt32(59),
                    AtIntakeConditionOfOccupancyWasAnsweredAs_16484_DisplayStr = reader.IsDBNull(60) ? null : reader.GetString(60),
                    AtIntakeLabourForceStatusWasAnsweredAs_16485 = reader.IsDBNull(61) ? (int?)null : reader.GetInt32(61),
                    AtIntakeLabourForceStatusWasAnsweredAs_16485_DisplayStr = reader.IsDBNull(62) ? null : reader.GetString(62),
                    AtIntakeEmploymentStatusWasAnsweredAs_16486 = reader.IsDBNull(63) ? (int?)null : reader.GetInt32(63),
                    AtIntakeEmploymentStatusWasAnsweredAs_16486_DisplayStr = reader.IsDBNull(64) ? null : reader.GetString(64),
                    AtIntakeMainSourceOfIncomeWasAnsweredAs_16487 = reader.IsDBNull(65) ? (int?)null : reader.GetInt32(65),
                    AtIntakeMainSourceOfIncomeWasAnsweredAs_16487_DisplayStr = reader.IsDBNull(66) ? null : reader.GetString(66),
                    AtIntakeCurrentlyRegisteredAndAwaitingFirstPaymentWasAnsweredAs_16488 = reader.IsDBNull(67) ? (int?)null : reader.GetInt32(67),
                    AtIntakeCurrentlyRegisteredAndAwaitingFirstPaymentWasAnsweredAs_16488_DisplayStr = reader.IsDBNull(68) ? null : reader.GetString(68),
                    AtIntakeUndertakingFormalTrainingWasAnsweredAs_16489 = reader.IsDBNull(69) ? (int?)null : reader.GetInt32(69),
                    AtIntakeUndertakingFormalTrainingWasAnsweredAs_16489_DisplayStr = reader.IsDBNull(70) ? null : reader.GetString(70),
                    AtIntakeEnrolledEducationtrainingWasAnsweredAs_16490 = reader.IsDBNull(71) ? (int?)null : reader.GetInt32(71),
                    AtIntakeEnrolledEducationtrainingWasAnsweredAs_16490_DisplayStr = reader.IsDBNull(72) ? null : reader.GetString(72),
                    Doyouhaveanappointedsubstitutedecisionmakermp_16498 = reader.IsDBNull(73) ? null : reader.GetString(73),
                    Doyouhaveanappointedsubstitutedecisionmakermp_16498_ResponseChoiceID = reader.IsDBNull(74) ? (int?)null : reader.GetInt32(74),
                    Selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500 = reader.IsDBNull(75) ? (int?)null : reader.GetInt32(75),
                    Selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500_SourceFormID = reader.IsDBNull(76) ? (int?)null : reader.GetInt32(76),
                    Selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500_DisplayStr = reader.IsDBNull(77) ? null : reader.GetString(77),
                    YouindicatedthattherearenocurrentopengoalsforthisparticipantIndicatereason_16501 = reader.IsDBNull(78) ? null : reader.GetString(78),
                    YouindicatedthattherearenocurrentopengoalsforthisparticipantIndicatereason_16501_ResponseChoiceID = reader.IsDBNull(79) ? (int?)null : reader.GetInt32(79),
                    Ifotherreasonpleasespecify_16502 = reader.IsDBNull(80) ? null : reader.GetString(80),
                    Thinkingaboutthegoalyouselectedandothergoalstowhatextentweretheparticipantsmanagementplangoals_16503 = reader.IsDBNull(81) ? null : reader.GetString(81),
                    Thinkingaboutthegoalyouselectedandothergoalstowhatextentweretheparticipantsmanagementplangoals_16503_ResponseChoiceID = reader.IsDBNull(82) ? (int?)null : reader.GetInt32(82),
                    Wasthereacasemanagementplanfortheparticipant_16504 = reader.IsDBNull(83) ? null : reader.GetString(83),
                    Wasthereacasemanagementplanfortheparticipant_16504_ResponseChoiceID = reader.IsDBNull(84) ? (int?)null : reader.GetInt32(84),
                    Age_16522 = reader.IsDBNull(85) ? (decimal?)null : reader.GetDecimal(85),
                    SubmitsSHSAIHWreports_21833 = reader.IsDBNull(86) ? null : reader.GetString(86),
                    TimespentonbehalfofparticipantPerstaffmember_23288 = reader.IsDBNull(87) ? (int?)null : reader.GetInt32(87),
                    HowmanystaffdidthistogetherAtmost4_23289 = reader.IsDBNull(88) ? (decimal?)null : reader.GetDecimal(88),
                    Totaltimespentonbehalfofparticipant_23290 = reader.IsDBNull(89) ? (int?)null : reader.GetInt32(89),
                    Hastheparticipantreturnedhome_28343 = reader.IsDBNull(90) ? null : reader.GetString(90),
                    Hastheparticipantreturnedhome_28343_ResponseChoiceID = reader.IsDBNull(91) ? (int?)null : reader.GetInt32(91),
                    ParticipantAge_29347 = reader.IsDBNull(92) ? (decimal?)null : reader.GetDecimal(92),
                    Totalefforttimeforparticipant_33292 = reader.IsDBNull(93) ? (int?)null : reader.GetInt32(93),
                    FName = reader.IsDBNull(94) ? null : reader.GetString(94),
                    LName = reader.IsDBNull(95) ? null : reader.GetString(95),
                    SubjectName = reader.IsDBNull(96) ? null : reader.GetString(96),
                    ProgramName = reader.IsDBNull(97) ? null : reader.GetString(97),
                    EntityName = reader.IsDBNull(98) ? null : reader.GetString(98),
                   

                });
            }

            return msurepo;
        }
    }
}