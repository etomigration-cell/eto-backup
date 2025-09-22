using System;
using System.Threading.Tasks;
using EtoApi.Models;
using Microsoft.Data.SqlClient;

public class LoginRepository
{
    private readonly string _connectionString;
    public LoginRepository(string connectionString) => _connectionString = connectionString;

    public async Task<User?> GetUserByUsernameAndPasswordHashAsync(string username, byte[] passwordHash)
    {
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        var sql = @"SELECT StaffID, Email FROM Staff WHERE Email = @username AND Password = @passwordHash";
        using var command = new SqlCommand(sql, connection);
        command.Parameters.AddWithValue("@username", username);
        command.Parameters.AddWithValue("@passwordHash", passwordHash);

        using var reader = await command.ExecuteReaderAsync();
        if (await reader.ReadAsync())
        {
            return new User
            {
                UserId = reader.GetInt32(0),
                UserName = reader.GetString(1)
            };
        }
        return null;
    }
}

public class User
{
    public int UserId { get; set; }
    public string UserName { get; set; } = "";
}
