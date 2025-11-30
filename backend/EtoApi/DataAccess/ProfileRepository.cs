using System;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class ProfileRepository
    {
        private readonly ISqlConnectionFactory _connectionFactory;

        public ProfileRepository(ISqlConnectionFactory connectionFactory)
            {
                _connectionFactory = connectionFactory;
            }

        public async Task<List<Profile>?> GetProfileDetails(string email)
        {
             using var connection = await _connectionFactory.CreateOpenConnectionAsync();

            var query = @"
                    SELECT
                    FName,
                    LName,
                    r.Role,
                    Email,
                    UserName,
                    sp.ProgramID,
                    sp.DefaultSelect,
                    sp.EditOwnCaseLoad,
                    sp.EditOthersCaseLoad,
                    sp.ViewClientsNotInCaseLoad,
                    sp.EditClientsNotInCaseLoad,
                    SiteID
                FROM Staff s
                JOIN StaffXProgram sp ON sp.StaffID = s.StaffID
                JOIN Roles r ON s.RoleId = r.RoleID
                WHERE s.Email = @email";
            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@email", email);

            var profileDetails = new List<Profile>();
            using var reader = await command.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                profileDetails.Add(new Profile
                {
                            
                 FName = reader.IsDBNull(0) ? null : reader.GetString(0),
                                LName = reader.IsDBNull(1) ? null : reader.GetString(1),
                                Role = reader.IsDBNull(2) ? null : reader.GetString(2),
                                Email = reader.IsDBNull(3) ? null : reader.GetString(3),
                                UserName = reader.IsDBNull(4) ? null : reader.GetString(4),
                                ProgramID = reader.IsDBNull(5) ? (int?)null : reader.GetInt16(5),
                                DefaultSelect = reader.IsDBNull(6) ? null : reader.GetBoolean(6),
                                EditOwnCaseLoad = reader.IsDBNull(7) ? null : reader.GetBoolean(7),
                                EditOthersCaseLoad = reader.IsDBNull(8) ? null : reader.GetBoolean(8),
                                ViewClientsNotInCaseLoad = reader.IsDBNull(9) ? null : reader.GetBoolean(9),
                                EditClientsNotInCaseLoad = reader.IsDBNull(10) ? null : reader.GetBoolean(10),
                                SiteID = reader.IsDBNull(11) ? (int?)null : reader.GetInt16(11),
                            });
                        }
                        return profileDetails;
                    }
                }
            }
