using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class ProgramHistoryRepository
    {
       private readonly ISqlConnectionFactory _connectionFactory;

        public ProgramHistoryRepository(ISqlConnectionFactory connectionFactory)
            {
                _connectionFactory = connectionFactory;
            }

        public async Task<List<ParticipantProgramHistory>> GetParticipantProgramHistoryByIdAsync(int id)
        {
             using var connection = await _connectionFactory.CreateOpenConnectionAsync();

            var query = @"
                SELECT
                cp.CLID,
                p.ProgramName,
                cp.ProgramStartDate,
                cp.EndDate,
                cp.AuditDate,
                s.FName,
                s.LName
                FROM ClientsXPrograms cp
                Join Programs p ON cp.ProgramID = p.ProgramID
                Join Staff s ON s.StaffID = cp.AuditStaffID
                WHERE CLID = @Id
                ORDER BY cp.AuditDate DESC";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var participantProgramHistory = new List<ParticipantProgramHistory>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                participantProgramHistory.Add(new ParticipantProgramHistory
                {
                    CLID = reader.IsDBNull(0) ? (int?)null : reader.GetInt32(0),
                    ProgramName = reader.IsDBNull(1) ? null : reader.GetString(1),
                    ProgramStartDate = reader.IsDBNull(2) ? (DateTime?)null : reader.GetDateTime(2),
                    ProgramEndDate = reader.IsDBNull(3) ? (DateTime?)null : reader.GetDateTime(3),
                    AuditDate = reader.IsDBNull(4) ? (DateTime?)null : reader.GetDateTime(4),
                    StaffFName = reader.IsDBNull(5) ? null : reader.GetString(5),
                    StaffLName = reader.IsDBNull(6) ? null : reader.GetString(6)
                });

            }
            return participantProgramHistory;
        }
    }
}
