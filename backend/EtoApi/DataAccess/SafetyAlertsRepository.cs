using EtoApi.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace EtoApi.DataAccess
{
    public class SafetyAlertsRepository
    {
        
        private readonly ISqlConnectionFactory _connectionFactory;
        

        public SafetyAlertsRepository(ISqlConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public async Task<List<SafetyAlertsModel>> GetSafetyAlertsByIdAsync(int id)
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
                    frm.MicahTeam_9597,
                    frm.MicahTeam_9597_ResponseChoiceID,
                    frm.Enteryourname_9598,
                    frm.AlertCategory_9599,
                    frm.AlertCategory_9599_ResponseChoiceID,
                    frm.AlertType_9600,
                    frm.AlertType_9600_ResponseChoiceID,
                    frm.OtherAlertType_9601,
                    frm.Notes_9602,
                    frm.Reviewdate_9603,
                    frm.ExpirationDate_9604,
                    frm.Datealertceasedbeingactive_9605,
                    frm.MicahTeam_11292,
                    frm.ExtremeRisk_23528,
                    frm.ExtremeRisk_23528_ResponseChoiceID,
                    frm.Safetydocuments_31786


                FROM form.f_238 frm
                JOIN Staff s ON frm.AuditStaffID = s.StaffID
                JOIN Entities e ON e.EntityID = frm.MicahTeam_16790
                JOIN SubjectType sub ON sub.SubjectTypeID = frm.SubjectTypeID
                JOIN Programs prg ON prg.ProgramID = frm.ProgramID
                WHERE frm.SubjectID = (SELECT SubjectID FROM SubjectXClient WHERE CLID = @Id)";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var saftyAlerts = new List<SafetyAlertsModel>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                saftyAlerts.Add(new SafetyAlertsModel
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
                    MicahTeam_9597 = reader.IsDBNull(17) ? null : reader.GetString(17),
                    MicahTeam_9597_ResponseChoiceID = reader.IsDBNull(18) ? (int?)null : reader.GetInt32(18),
                    Enteryourname_9598 = reader.IsDBNull(19) ? (int?)null : reader.GetInt32(19),
                    AlertCategory_9599 = reader.IsDBNull(20) ? null : reader.GetString(20),
                    AlertCategory_9599_ResponseChoiceID = reader.IsDBNull(21) ? (int?)null : reader.GetInt32(21),
                    AlertType_9600 = reader.IsDBNull(22) ? null : reader.GetString(22),
                    AlertType_9600_ResponseChoiceID = reader.IsDBNull(23) ? (int?)null : reader.GetInt32(23),
                    OtherAlertType_9601 = reader.IsDBNull(24) ? null : reader.GetString(24),
                    Notes_9602 = reader.IsDBNull(25) ? null : reader.GetString(25),
                    Reviewdate_9603 = reader.IsDBNull(26) ? (DateTime?)null : reader.GetDateTime(26),
                    ExpirationDate_9604 = reader.IsDBNull(27) ? (DateTime?)null : reader.GetDateTime(27),
                    Datealertceasedbeingactive_9605 = reader.IsDBNull(28) ? (DateTime?)null : reader.GetDateTime(28),
                    MicahTeam_11292 = reader.IsDBNull(29) ? (int?)null : reader.GetInt32(29),
                    ExtremeRisk_23528 = reader.IsDBNull(30) ? null : reader.GetString(30),
                    ExtremeRisk_23528_ResponseChoiceID = reader.IsDBNull(31) ? (int?)null : reader.GetInt32(31),
                    Safetydocuments_31786 = reader.IsDBNull(32) ? (int?)null : reader.GetInt32(32),

                });
            }

            return saftyAlerts;
        }
    }
}
