using System.Collections.Generic;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class FamilyRepository
    {
        private readonly string _connectionString;

        public FamilyRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<List<FamilyMember>> GetFamilyMembersByIdAsync(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                SELECT 
                    c.CaseNumber, c.FName, c.LName, fmd.IsHeadOfFamily, fr.FamilyRelationship, f.FamilyName
                FROM 
                    FamilyMemberDetail fmd
                INNER JOIN Clients c ON c.CLID = fmd.CLID
                INNER JOIN FamilyRelationships fr ON fr.FamilyRelationshipID = fmd.FamilyRelationshipID
                INNER JOIN Families f ON fmd.FamilyID = f.FamilyID
                WHERE 
                    fmd.FamilyID = (SELECT FamilyID FROM FamilyMemberDetail WHERE CLID = @Id) 
                    AND fmd.EndDate IS NULL
            ";

            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            var familyMembers = new List<FamilyMember>();
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                familyMembers.Add(new FamilyMember
                {
                    CaseNumber = reader.GetString(0),
                    FName = reader.GetString(1),
                    LName = reader.GetString(2),
                    IsHeadOfFamily = reader.GetBoolean(3),
                    FamilyRelationship = reader.GetString(4),
                    FamilyName = reader.GetString(5),
                });
            }
            return familyMembers;
        }
    }
}
