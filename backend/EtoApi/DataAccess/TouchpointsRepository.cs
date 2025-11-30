using System;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class TouchpointsRepository
    {
        private readonly ISqlConnectionFactory _connectionFactory;

        public TouchpointsRepository(ISqlConnectionFactory connectionFactory)
            {
                _connectionFactory = connectionFactory;
            }

        public async Task<List<Touchpoints>?> GetTouchpoints(int programId)
        {
             using var connection = await _connectionFactory.CreateOpenConnectionAsync();

            var query = @"
                    select Distinct tu.TouchPointName, tu.TouchpointID, p.ProgramID, p.ProgramName from dm.ProgramDim p, dm.TouchpointResponseFact t,
                    dm.TouchpointDim tu where p.ProgramKey = t.ProgramKey and tu.TouchpointKey = t.TouchpointKey 
                    and ProgramID = @programId";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@programId", programId);

            var touchpoints = new List<Touchpoints>();
            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                touchpoints.Add(new Touchpoints
                {
                    TouchpointName = reader.IsDBNull(0) ? null : reader.GetString(0),
                    TouchpointID = reader.IsDBNull(1) ? null : reader.GetInt32(1),
                    ProgramID = reader.IsDBNull(1) ? null : reader.GetInt16(2),
                    ProgramName = reader.IsDBNull(2) ? null : reader.GetString(3)
                });
            }
                return touchpoints;
                }
                }
            }
