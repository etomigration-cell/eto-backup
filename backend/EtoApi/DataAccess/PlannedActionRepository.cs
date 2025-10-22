using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class PlannedActionRepository
    {
        private readonly ISqlConnectionFactory _connectionFactory;

        public PlannedActionRepository(ISqlConnectionFactory connectionFactory)
            {
                _connectionFactory = connectionFactory;
            }

        public async Task<List<PlannedAction>> GetPlannedActionByIdAsync(int id, int programCode)
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
            frm.AuditStaffID,
            frm.AuditDate,
            DataEnteredByID,
            DraftSavedOn,
            RemovedDate,
            PrimarilyResponsible_15702,
            PrimarilyResponsible_15702_ResponseChoiceID,
            ActionDescription_15703,
            ActionComment_15704,
            ActionDueDate_15705,
            CompletionDateLeaveBlankIfGoalIncomplete_15706,
            e.EntityName,
            ParentFormResponseID_293,
            ThisactionisinresponsetothisLTgoal_16960,
            ThisactionisinresponsetothisLTgoal_16960_DisplayStr,
            ThisactionisinresponsetothisCrisisgoal_16961,
            ThisactionisinresponsetothisCrisisgoal_16961_DisplayStr,
            ThisactionisinresponsetothisOthergoal_16962,
            ThisactionisinresponsetothisOthergoal_16962_DisplayStr,
            HideifEmpty_16964,
            LTgoalisempty_16965,
            LTgoalisempty_16965_ResponseChoiceID,
            crisisgoalisempty_16966,
            crisisgoalisempty_16966_ResponseChoiceID,
            Othergoalisempty_16967,
            Othergoalisempty_16967_ResponseChoiceID,
            ClosestatusofPlannedAction_22338,
            ClosestatusofPlannedAction_22338_ResponseChoiceID,
            AssignedtoStaffMember_22728,
            Selectyourname_24635,
            Whichgoalwasthisfor_29382,
            Whichgoalwasthisfor_29382_SourceFormID,
            Whichgoalwasthisfor_29382_DisplayStr,
            Actioncreatedby_29503,
            RiskLevel_33169,
            RiskLevel_33169_ResponseChoiceID,
            s.FName,
            s.LName
            FROM form.f_295 frm
            JOIN Staff s ON frm.AuditStaffID = s.StaffID
            JOIN Entities e ON e.EntityID = frm.MicahTeam_15707
            JOIN SubjectType sub ON sub.SubjectTypeID = frm.SubjectTypeID
            JOIN Programs prg ON prg.ProgramID = frm.ProgramID
            Join ClientsXPrograms cp ON cp.CLID = @Id and cp.ProgramID = @programCode
            WHERE frm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id) and frm.ProgramID = @programCode
            ORDER BY frm.AuditDate DESC";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);
            command.Parameters.AddWithValue("@programCode", programCode);
            
            var plannedActions = new List<PlannedAction>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
{
    plannedActions.Add(new PlannedAction
    {
        FormResponseID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
        FormIdentifier = reader.IsDBNull(1) ? (int?)null : reader.GetInt32(1),
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
        PrimarilyResponsible_15702 = reader.IsDBNull(17) ? null : reader.GetString(17),
        PrimarilyResponsible_15702_ResponseChoiceID = reader.IsDBNull(18) ? (int?)null : reader.GetInt32(18),
        ActionDescription_15703 = reader.IsDBNull(19) ? null : reader.GetString(19),
        ActionComment_15704 = reader.IsDBNull(20) ? null : reader.GetString(20),
        ActionDueDate_15705 = reader.IsDBNull(21) ? (DateTime?)null : reader.GetDateTime(21),
        CompletionDateLeaveBlankIfGoalIncomplete_15706 = reader.IsDBNull(22) ? (DateTime?)null : reader.GetDateTime(22),
        MicahTeam_15707 = reader.IsDBNull(23) ? null : reader.GetString(23),
        ParentFormResponseID_293 = reader.IsDBNull(24) ? (int?)null : reader.GetInt32(24),
        ThisactionisinresponsetothisLTgoal_16960 = reader.IsDBNull(25) ? (int?)null : reader.GetInt32(25),
        ThisactionisinresponsetothisLTgoal_16960_DisplayStr = reader.IsDBNull(26) ? null : reader.GetString(26),
        ThisactionisinresponsetothisCrisisgoal_16961 = reader.IsDBNull(27) ? (int?)null : reader.GetInt32(27),
        ThisactionisinresponsetothisCrisisgoal_16961_DisplayStr = reader.IsDBNull(28) ? null : reader.GetString(28),
        ThisactionisinresponsetothisOthergoal_16962 = reader.IsDBNull(29) ? (int?)null : reader.GetInt32(29),
        ThisactionisinresponsetothisOthergoal_16962_DisplayStr = reader.IsDBNull(30) ? null : reader.GetString(30),
        HideifEmpty_16964 = reader.IsDBNull(31) ? null : reader.GetString(31),
        LTgoalisempty_16965 = reader.IsDBNull(32) ? null : reader.GetString(32),
        LTgoalisempty_16965_ResponseChoiceID = reader.IsDBNull(33) ? (int?)null : reader.GetInt32(33),
        crisisgoalisempty_16966 = reader.IsDBNull(34) ? null : reader.GetString(34),
        crisisgoalisempty_16966_ResponseChoiceID = reader.IsDBNull(35) ? (int?)null : reader.GetInt32(35),
        Othergoalisempty_16967 = reader.IsDBNull(36) ? null : reader.GetString(36),
        Othergoalisempty_16967_ResponseChoiceID = reader.IsDBNull(37) ? (int?)null : reader.GetInt32(37),
        ClosestatusofPlannedAction_22338 = reader.IsDBNull(38) ? null : reader.GetString(38),
        ClosestatusofPlannedAction_22338_ResponseChoiceID = reader.IsDBNull(39) ? (int?)null : reader.GetInt32(39),
        AssignedtoStaffMember_22728 = reader.IsDBNull(40) ? (int?)null : reader.GetInt32(40),
        Selectyourname_24635 = reader.IsDBNull(41) ? (int?)null : reader.GetInt32(41),
        Whichgoalwasthisfor_29382 = reader.IsDBNull(42) ? (int?)null : reader.GetInt32(42),
        Whichgoalwasthisfor_29382_SourceFormID = reader.IsDBNull(43) ? (int?)null : reader.GetInt32(43),
        Whichgoalwasthisfor_29382_DisplayStr = reader.IsDBNull(44) ? null : reader.GetString(44),
        Actioncreatedby_29503 = reader.IsDBNull(45) ? null : reader.GetString(45),
        RiskLevel_33169 = reader.IsDBNull(46) ? null : reader.GetString(46),
        RiskLevel_33169_ResponseChoiceID = reader.IsDBNull(47) ? (int?)null : reader.GetInt32(47),
        FName = reader.IsDBNull(48) ? null : reader.GetString(48),
        LName = reader.IsDBNull(49) ? null : reader.GetString(49)
    });

}
            return plannedActions;
        }
    }
}
