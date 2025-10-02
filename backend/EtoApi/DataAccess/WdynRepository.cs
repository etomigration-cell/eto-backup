using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class WdynRepository
    {
         private readonly ISqlConnectionFactory _connectionFactory;

        public WdynRepository(ISqlConnectionFactory connectionFactory)
            {
                _connectionFactory = connectionFactory;
            }


        public async Task<List<Wdyn>> GetWdynByIdAsync(int id)
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
                sub.SubjectTypeID,
                CollectionID,
                ResponseCreatedDate,
                prg.ProgramName,
                s.AuditStaffID,
                s.AuditDate,
                DataEnteredByID,
                DraftSavedOn,
                RemovedDate,
                ScopeOfGoal_15196,
                ScopeOfGoal_15196_ResponseChoiceID,
                WhatIsTheCurrentStatusOfThisGoal_15197,
                WhatIsTheCurrentStatusOfThisGoal_15197_ResponseChoiceID,
                OtherGoalNotListedAbove_15200,
                Comments_15201,
                OverallOutcomesAtGoalAchievementEndDate_15202,
                DateGoalClosed_15203,
                ParticipantLevelOfMotivationForThisGoal_15206,
                ParticipantLevelOfMotivationForThisGoal_15206_ResponseChoiceID,
                DontChangeMe_15216,
                GoalLongerTerm_15220,
                GoalLongerTerm_15220_ResponseChoiceID,
                DomainChooseOne_15221,
                DomainChooseOne_15221_ResponseChoiceID,
                GoalCrisis_15222,
                GoalCrisis_15222_ResponseChoiceID,
                Isthisgoalfor_15243,
                Isthisgoalfor_15243_ResponseChoiceID,
                YouindicatedthatthisisforachildofthisparentPleaseselectthechild_15244,
                SHSTypeOfServiceActivityTxt_15300,
                Selectyourname_15404,
                Start_15486,
                Endoptional_15487,
                HowmanystaffdidthistogetherAtmost4_15489,
                Selectthe2ndstaffperson_15491,
                Whatotherteamassisted_15492,
                WasthisaPATpersonalvisit_15493,
                WasthisaPATpersonalvisit_15493_ResponseChoiceID,
                TimespentonbehalfofparticipantPerstaffmember_15494,
                TimespentwithparticipantPerstaffmember_15496,
                Totaltimespentonbehalfofparticipant_15497,
                Totaltimespenttravelling_15498,
                Totaltimespentwithparticipant_15499,
                ContactMethod_15501,
                ContactMethod_15501_ResponseChoiceID,
                ContactLocation_15502,
                ContactLocation_15502_ResponseChoiceID,
                Ifcontactlocationisotherpleasespecify_15503,
                PhoneContactType_15504,
                PhoneContactType_15504_ResponseChoiceID,
                Totalefforttimeforparticipant_15587,
                SHSTypeOfServiceActivityNum_16066,
                e.EntityName,
                TimespenttravellingNotwithparticipantPerstaffmember_16086,
                PlanType_16365,
                PlanType_16365_ResponseChoiceID,
                TypeofCrisis_16587,
                TypeofCrisis_16587_ResponseChoiceID,
                Hasthispersonfamilybeenpermanentlyhoused_16951,
                Hasthispersonfamilybeenpermanentlyhoused_16951_ResponseChoiceID,
                Whatdateweretheyhoused_16952,
                Throughwhichprovider_16954,
                Ifaleaseisinplacewhatisthedurationoftheleaseinmonths_16956,
                Ifaleaseinplacewhatistherenewaldate_16957,
                Areautorentpaymentsinplace_16958,
                Areautorentpaymentsinplace_16958_ResponseChoiceID,
                WDYNStatus_23093,
                WDYNStatus_23093_ResponseChoiceID,
                HasEnddate_23283,
                HasEnddate_23283_ResponseChoiceID,
                Whattypeofhousingisit_28334,
                Whattypeofhousingisit_28334_ResponseChoiceID,
                Istheparticipantfamilysleepingroughatthispresentation_28911,
                Istheparticipantfamilysleepingroughatthispresentation_28911_ResponseChoiceID,
                s.FName,
                s.LName
                FROM form.f_293 frm
                JOIN Staff s ON frm.AuditStaffID = s.StaffID
                JOIN Entities e ON e.EntityID = frm.MicahTeam_16083
                JOIN SubjectType sub ON sub.SubjectTypeID = frm.SubjectTypeID
                JOIN Programs prg ON prg.ProgramID = frm.ProgramID
                WHERE frm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id)";
            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var wdyns = new List<Wdyn>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                wdyns.Add(new Wdyn
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
                ScopeOfGoal_15196 = reader.IsDBNull(17) ? null : reader.GetString(17),
                ScopeOfGoal_15196_ResponseChoiceID = reader.IsDBNull(18) ? (int?)null : reader.GetInt32(18),
                WhatIsTheCurrentStatusOfThisGoal_15197 = reader.IsDBNull(19) ? null : reader.GetString(19),
                WhatIsTheCurrentStatusOfThisGoal_15197_ResponseChoiceID = reader.IsDBNull(20) ? (int?)null : reader.GetInt32(20),
                OtherGoalNotListedAbove_15200 = reader.IsDBNull(21) ? null : reader.GetString(21),
                Comments_15201 = reader.IsDBNull(22) ? null : reader.GetString(22),
                OverallOutcomesAtGoalAchievementEndDate_15202 = reader.IsDBNull(23) ? null : reader.GetString(23),
                DateGoalClosed_15203 = reader.IsDBNull(24) ? (DateTime?)null : reader.GetDateTime(24),
                ParticipantLevelOfMotivationForThisGoal_15206 = reader.IsDBNull(25) ? null : reader.GetString(25),
                ParticipantLevelOfMotivationForThisGoal_15206_ResponseChoiceID = reader.IsDBNull(26) ? (int?)null : reader.GetInt32(26),
                DontChangeMe_15216 = reader.IsDBNull(27) ? (decimal?)null : reader.GetDecimal(27),
                GoalLongerTerm_15220 = reader.IsDBNull(28) ? null : reader.GetString(28),
                GoalLongerTerm_15220_ResponseChoiceID = reader.IsDBNull(29) ? (int?)null : reader.GetInt32(29),
                DomainChooseOne_15221 = reader.IsDBNull(30) ? null : reader.GetString(30),
                DomainChooseOne_15221_ResponseChoiceID = reader.IsDBNull(31) ? (int?)null : reader.GetInt32(31),
                GoalCrisis_15222 = reader.IsDBNull(32) ? null : reader.GetString(32),
                GoalCrisis_15222_ResponseChoiceID = reader.IsDBNull(33) ? (int?)null : reader.GetInt32(33),
                Isthisgoalfor_15243 = reader.IsDBNull(34) ? null : reader.GetString(34),
                Isthisgoalfor_15243_ResponseChoiceID = reader.IsDBNull(35) ? (int?)null : reader.GetInt32(35),
                YouindicatedthatthisisforachildofthisparentPleaseselectthechild_15244 = reader.IsDBNull(36) ? (int?)null : reader.GetInt32(36),
                SHSTypeOfServiceActivityTxt_15300 = reader.IsDBNull(37) ? null : reader.GetString(37),
                Selectyourname_15404 = reader.IsDBNull(38) ? (int?)null : reader.GetInt32(38),
                Start_15486 = reader.IsDBNull(39) ? null : reader.GetString(39),
                Endoptional_15487 = reader.IsDBNull(40) ? null : reader.GetString(40),
                HowmanystaffdidthistogetherAtmost4_15489 = reader.IsDBNull(41) ? (decimal?)null : reader.GetDecimal(41),
                Selectthe2ndstaffperson_15491 = reader.IsDBNull(42) ? (int?)null : reader.GetInt32(42),
                Whatotherteamassisted_15492 = reader.IsDBNull(43) ? (int?)null : reader.GetInt32(43),
                WasthisaPATpersonalvisit_15493 = reader.IsDBNull(44) ? null : reader.GetString(44),
                WasthisaPATpersonalvisit_15493_ResponseChoiceID = reader.IsDBNull(45) ? (int?)null : reader.GetInt32(45),
                TimespentonbehalfofparticipantPerstaffmember_15494 = reader.IsDBNull(46) ? (int?)null : reader.GetInt32(46),
                TimespentwithparticipantPerstaffmember_15496 = reader.IsDBNull(47) ? (int?)null : reader.GetInt32(47),
                Totaltimespentonbehalfofparticipant_15497 = reader.IsDBNull(48) ? (int?)null : reader.GetInt32(48),
                Totaltimespenttravelling_15498 = reader.IsDBNull(49) ? (int?)null : reader.GetInt32(49),
                Totaltimespentwithparticipant_15499 = reader.IsDBNull(50) ? (int?)null : reader.GetInt32(50),
                ContactMethod_15501 = reader.IsDBNull(51) ? null : reader.GetString(51),
                ContactMethod_15501_ResponseChoiceID = reader.IsDBNull(52) ? (int?)null : reader.GetInt32(52),
                ContactLocation_15502 = reader.IsDBNull(53) ? null : reader.GetString(53),
                ContactLocation_15502_ResponseChoiceID = reader.IsDBNull(54) ? (int?)null : reader.GetInt32(54),
                Ifcontactlocationisotherpleasespecify_15503 = reader.IsDBNull(55) ? null : reader.GetString(55),
                PhoneContactType_15504 = reader.IsDBNull(56) ? null : reader.GetString(56),
                PhoneContactType_15504_ResponseChoiceID = reader.IsDBNull(57) ? (int?)null : reader.GetInt32(57),
                Totalefforttimeforparticipant_15587 = reader.IsDBNull(58) ? (int?)null : reader.GetInt32(58),
                SHSTypeOfServiceActivityNum_16066 = reader.IsDBNull(59) ? null : reader.GetString(59),
                MicahTeam_16083 = reader.IsDBNull(60) ? null : reader.GetString(60),
                TimespenttravellingNotwithparticipantPerstaffmember_16086 = reader.IsDBNull(61) ? (int?)null : reader.GetInt32(61),
                PlanType_16365 = reader.IsDBNull(62) ? null : reader.GetString(62),
                PlanType_16365_ResponseChoiceID = reader.IsDBNull(63) ? (int?)null : reader.GetInt32(63),
                TypeofCrisis_16587 = reader.IsDBNull(64) ? null : reader.GetString(64),
                TypeofCrisis_16587_ResponseChoiceID = reader.IsDBNull(65) ? (int?)null : reader.GetInt32(65),
                Hasthispersonfamilybeenpermanentlyhoused_16951 = reader.IsDBNull(66) ? null : reader.GetString(66),
                Hasthispersonfamilybeenpermanentlyhoused_16951_ResponseChoiceID = reader.IsDBNull(67) ? (int?)null : reader.GetInt32(67),
                Whatdateweretheyhoused_16952 = reader.IsDBNull(68) ? (DateTime?)null : reader.GetDateTime(68),
                Throughwhichprovider_16954 = reader.IsDBNull(69) ? (int?)null : reader.GetInt32(69),
                Ifaleaseisinplacewhatisthedurationoftheleaseinmonths_16956 = reader.IsDBNull(70) ? (decimal?)null : reader.GetDecimal(70),
                Ifaleaseinplacewhatistherenewaldate_16957 = reader.IsDBNull(71) ? (DateTime?)null : reader.GetDateTime(71),
                Areautorentpaymentsinplace_16958 = reader.IsDBNull(72) ? null : reader.GetString(72),
                Areautorentpaymentsinplace_16958_ResponseChoiceID = reader.IsDBNull(73) ? (int?)null : reader.GetInt32(73),
                WDYNStatus_23093 = reader.IsDBNull(74) ? null : reader.GetString(74),
                WDYNStatus_23093_ResponseChoiceID = reader.IsDBNull(75) ? (int?)null : reader.GetInt32(75),
                HasEnddate_23283 = reader.IsDBNull(76) ? null : reader.GetString(76),
                HasEnddate_23283_ResponseChoiceID = reader.IsDBNull(77) ? (int?)null : reader.GetInt32(77),
                Whattypeofhousingisit_28334 = reader.IsDBNull(78) ? null : reader.GetString(78),
                Whattypeofhousingisit_28334_ResponseChoiceID = reader.IsDBNull(79) ? (int?)null : reader.GetInt32(79),
                Istheparticipantfamilysleepingroughatthispresentation_28911 = reader.IsDBNull(80) ? null : reader.GetString(80),
                Istheparticipantfamilysleepingroughatthispresentation_28911_ResponseChoiceID = reader.IsDBNull(81) ? (int?)null : reader.GetInt32(81),
                fName = reader.IsDBNull(82) ? null : reader.GetString(82),
                lName = reader.IsDBNull(83) ? null : reader.GetString(83),
            });

            }
            return wdyns;
        }
    }
}
