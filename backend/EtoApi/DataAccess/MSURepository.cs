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
                    frm.Totalefforttimeforparticipant_33292

                FROM form.f_300 frm
                JOIN Staff s ON frm.AuditStaffID = s.StaffID
                JOIN Entities e ON e.EntityID = frm.MicahTeam_11292
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
                    SubjectID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    GroupID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    FamilyID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    ResponseSetID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    FormID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    CollectionTypeID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    SubjectTypeID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    CollectionID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    ResponseCreatedDate = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    ProgramID = reader.IsDBNull(11) ? (int?)null : reader.GetInt16(11),
                    AuditStaffID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AuditDate = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    DataEnteredByID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    DraftSavedOn = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    RemovedDate = reader.IsDBNull(15) ? (DateTime?)null : reader.GetDateTime(15),
                    DwellingType_16392 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    DwellingType_16392_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    EpisodeOfHomelessness_16393 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    EpisodeOfHomelessness_16393_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IfTheParticipantIsUnderTheAgeOf18AndHasACareOrProtectionOrderWhatWereTheirCareArrangements_16394 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IfTheParticipantIsUnderTheAgeOf18AndHasACareOrProtectionOrderWhatWereTheirCareArrangements_16394_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    LivingArrangements_16395 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    LivingArrangements_16395_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    ConditionsOfOccupancy_16396 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    ConditionsOfOccupancy_16396_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    LabourForceStatus_16397 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    LabourForceStatus_16397_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IfTheParticipantIs15yrsWhatIsTheirEmploymentStatus_16398 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IfTheParticipantIs15yrsWhatIsTheirEmploymentStatus_16398_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    MainSourceOfIncome_16399 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    MainSourceOfIncome_16399_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IsTheParticipantCurrentlyRegisteredForAGovernmentBenefitPensionOrAllowanceButAwaitingTheFirstP_16400 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IsTheParticipantCurrentlyRegisteredForAGovernmentBenefitPensionOrAllowanceButAwaitingTheFirstP_16400_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    IsTheParticipantUndertakingFormalStudyOrTrainingEgSchoolUniversityVocationalStudiesSuchAsTafe_16401 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    IsTheParticipantUndertakingFormalStudyOrTrainingEgSchoolUniversityVocationalStudiesSuchAsTafe_16401_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Tenure_16402 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Tenure_16402_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    DoesThePublicTrusteeAdministerTheParticipantsPersonalFinancesMp_16420 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    DoesThePublicTrusteeAdministerTheParticipantsPersonalFinancesMp_16420_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    WhatTypeOfEducationtrainingIsTheParticipantEnrolledIn_16426 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    WhatTypeOfEducationtrainingIsTheParticipantEnrolledIn_16426_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    MicahTeam_16473 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    SelectYourName_16475 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeThisCareArrangementsQuestionWasAnsweredAs_16477 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeThisCareArrangementsQuestionWasAnsweredAs_16477_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeThisHomelessnessQuestionWasAnsweredAs_16478 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeThisHomelessnessQuestionWasAnsweredAs_16478_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeThisPublicGuardianQuestionWasAnsweredAs_16479 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeThisPublicGuardianQuestionWasAnsweredAs_16479_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeThisPublicTrusteeQuestionWasAnsweredAs_16480 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeThisPublicTrusteeQuestionWasAnsweredAs_16480_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeLivingArrangementsWasAnsweredAs_16481 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeLivingArrangementsWasAnsweredAs_16481_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeDwellingTypeWasAnsweredAs_16482 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeDwellingTypeWasAnsweredAs_16482_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeTenureWasAnsweredAs_16483 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeTenureWasAnsweredAs_16483_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeConditionOfOccupancyWasAnsweredAs_16484 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeConditionOfOccupancyWasAnsweredAs_16484_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeLabourForceStatusWasAnsweredAs_16485 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeLabourForceStatusWasAnsweredAs_16485_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeEmploymentStatusWasAnsweredAs_16486 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeEmploymentStatusWasAnsweredAs_16486_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeMainSourceOfIncomeWasAnsweredAs_16487 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeMainSourceOfIncomeWasAnsweredAs_16487_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeCurrentlyRegisteredAndAwaitingFirstPaymentWasAnsweredAs_16488 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeCurrentlyRegisteredAndAwaitingFirstPaymentWasAnsweredAs_16488_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeUndertakingFormalTrainingWasAnsweredAs_16489 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeUndertakingFormalTrainingWasAnsweredAs_16489_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    AtIntakeEnrolledEducationtrainingWasAnsweredAs_16490 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    AtIntakeEnrolledEducationtrainingWasAnsweredAs_16490_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Doyouhaveanappointedsubstitutedecisionmakermp_16498 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Doyouhaveanappointedsubstitutedecisionmakermp_16498_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500_SourceFormID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Selectwhichgoalmostreflectstheprogressofthesupportmanagementplaniftherearenocurrentgoalsleavet_16500_DisplayStr = reader.IsDBNull(1) ? null : reader.GetString(1),
                    YouindicatedthattherearenocurrentopengoalsforthisparticipantIndicatereason_16501 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    YouindicatedthattherearenocurrentopengoalsforthisparticipantIndicatereason_16501_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Ifotherreasonpleasespecify_16502 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Thinkingaboutthegoalyouselectedandothergoalstowhatextentweretheparticipantsmanagementplangoals_16503 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Thinkingaboutthegoalyouselectedandothergoalstowhatextentweretheparticipantsmanagementplangoals_16503_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Wasthereacasemanagementplanfortheparticipant_16504 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Wasthereacasemanagementplanfortheparticipant_16504_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Age_16522 = reader.IsDBNull(261) ? (decimal?)null : reader.GetDecimal(261),
                    SubmitsSHSAIHWreports_21833 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    TimespentonbehalfofparticipantPerstaffmember_23288 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    HowmanystaffdidthistogetherAtmost4_23289 = reader.IsDBNull(261) ? (decimal?)null : reader.GetDecimal(261),
                    Totaltimespentonbehalfofparticipant_23290 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    Hastheparticipantreturnedhome_28343 = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Hastheparticipantreturnedhome_28343_ResponseChoiceID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    ParticipantAge_29347 = reader.IsDBNull(261) ? (decimal?)null : reader.GetDecimal(261),
                    Totalefforttimeforparticipant_33292 = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),

                });
            }

            return msurepo;
        }
    }
}
