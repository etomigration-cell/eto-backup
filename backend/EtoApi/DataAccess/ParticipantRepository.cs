using System;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

namespace EtoApi.DataAccess
{
    public class ParticipantRepository
    {
        private readonly string _connectionString;

        public ParticipantRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<ParticipantDetails?> GetParticipantByIdAsync(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            var query = @"
                SELECT
                    CLID,
                    SSN,
                    CaseNumber,
                    FName,
                    MiddleInitial,
                    LName,
                    Disabled,
                    PrefixID,
                    SuffixID,
                    EthnicityID,
                    DOB,
                    Address1,
                    Address2,
                    ZipCode,
                    HomePhone,
                    CellPhone,
                    WorkPhone,
                    WorkPhoneExtension,
                    Pager,
                    Email,
                    Gender,
                    MaritalStatusID,
                    FundingEntityID,
                    ReferralEntityID,
                    AuditStaffID,
                    AuditDate,
                    AssignedStaffID,
                    DateCreated,
                    Alert,
                    HoR_ID,
                    HoR_ChildID,
                    HoR_BID,
                    HoR_IDAbuser,
                    HoR_VID,
                    ClientGUID,
                    TigerID,
                    CensusTract,
                    CensusBlock,
                    CLID_Source,
                    ZipExtension,
                    OptOut,
                    ReferralNotification,
                    CSiteID
                FROM Clients
                WHERE CLID = @Id";
            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);

            using var reader = await command.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                return new ParticipantDetails
                {
                    CLID = reader.IsDBNull(0) ? 0 : reader.GetInt32(0),
                    SSN = reader.IsDBNull(1) ? null : reader.GetString(1),
                    CaseNumber = reader.IsDBNull(2) ? null : reader.GetString(2),
                    FName = reader.IsDBNull(3) ? null : reader.GetString(3),
                    MiddleInitial = reader.IsDBNull(4) ? null : reader.GetString(4),
                    LName = reader.IsDBNull(5) ? null : reader.GetString(5),
                    Disabled = reader.IsDBNull(6) ? false : reader.GetBoolean(6),
                    PrefixID = reader.IsDBNull(7) ? (int?)null : reader.GetInt16(7),
                    SuffixID = reader.IsDBNull(8) ? (int?)null : reader.GetInt16(8),
                    EthnicityID = reader.IsDBNull(9) ? (int?)null : reader.GetInt16(9),
                    DOB = reader.IsDBNull(10) ? DateTime.MinValue : reader.GetDateTime(10),
                    Address1 = reader.IsDBNull(11) ? null : reader.GetString(11),
                    Address2 = reader.IsDBNull(12) ? null : reader.GetString(12),
                    ZipCode = reader.IsDBNull(13) ? null : reader.GetString(13),
                    HomePhone = reader.IsDBNull(14) ? null : reader.GetString(14),
                    CellPhone = reader.IsDBNull(15) ? null : reader.GetString(15),
                    WorkPhone = reader.IsDBNull(16) ? null : reader.GetString(16),
                    WorkPhoneExtension = reader.IsDBNull(17) ? null : reader.GetString(17),
                    Pager = reader.IsDBNull(18) ? null : reader.GetString(18),
                    Email = reader.IsDBNull(19) ? null : reader.GetString(19),
                    Gender = reader.IsDBNull(20) ? null : reader.GetBoolean(20),
                    MaritalStatusID = reader.IsDBNull(21) ? (int?)null : reader.GetInt16(21),
                    FundingEntityID = reader.IsDBNull(22) ? (int?)null : reader.GetInt32(22),
                    ReferralEntityID = reader.IsDBNull(23) ? (int?)null : reader.GetInt32(23),
                    AuditStaffID = reader.IsDBNull(24) ? (int?)null : reader.GetInt32(24),
                    AuditDate = reader.IsDBNull(25) ? (DateTime?)null : reader.GetDateTime(25),
                    AssignedStaffID = reader.IsDBNull(26) ? (int?)null : reader.GetInt32(26),
                    DateCreated = reader.IsDBNull(27) ? (DateTime?)null : reader.GetDateTime(27),
                    Alert = reader.IsDBNull(28) ? null : reader.GetString(28),
                    HoR_ID = reader.IsDBNull(29) ? (int?)null : reader.GetInt32(29),
                    HoR_ChildID = reader.IsDBNull(30) ? (int?)null : reader.GetInt32(30),
                    HoR_BID = reader.IsDBNull(31) ? (int?)null : reader.GetInt32(31),
                    HoR_IDAbuser = reader.IsDBNull(32) ? (int?)null : reader.GetInt32(32),
                    HoR_VID = reader.IsDBNull(33) ? (int?)null : reader.GetInt32(33),
                    ClientGUID = reader.IsDBNull(34) ? null : reader.GetString(34),
                    TigerID = reader.IsDBNull(35) ? null : Convert.ToInt32(reader.GetInt64(35)),
                    CensusTract = reader.IsDBNull(36) ? null : reader.GetString(36),
                    CensusBlock = reader.IsDBNull(37) ? null : reader.GetString(37),
                    CLID_Source = reader.IsDBNull(38) ? null : reader.GetInt32(38),
                    ZipExtension = reader.IsDBNull(39) ? null : reader.GetString(39),
                    OptOut = reader.IsDBNull(40) ? null : reader.GetBoolean(40),
                    ReferralNotification = reader.IsDBNull(41) ? null : reader.GetBoolean(41),
                    CSiteID = reader.IsDBNull(42) ? null : reader.GetInt16(42)
                };
            }
            return null;
        }
    }
}
