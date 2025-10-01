using Microsoft.Data.SqlClient;
using System.Threading;
using System.Threading.Tasks;
using Azure.Core;
using Azure.Identity;
using Microsoft.Extensions.Configuration;

public interface ISqlConnectionFactory
{
    Task<SqlConnection> CreateOpenConnectionAsync(CancellationToken cancellationToken = default);
}

public class SqlConnectionFactory : ISqlConnectionFactory
{
    private readonly string _connectionString;
    private readonly InteractiveBrowserCredential _credential;

    public SqlConnectionFactory(IConfiguration configuration)
    {
        _connectionString = "Server=nkmanre2rtoenfr6dkk3gsjhb4-y3n5fc7aubuuja37yhj7e3xgli.datawarehouse.fabric.microsoft.com,1433;Initial Catalog=lh_bz_eto_migration;Encrypt=True;TrustServerCertificate=False;";
        _credential = new InteractiveBrowserCredential();
    }

    public async Task<SqlConnection> CreateOpenConnectionAsync(CancellationToken cancellationToken = default)
    {
        var builder = new SqlConnectionStringBuilder(_connectionString)
        {
            UserID = string.Empty,
            Password = string.Empty,
            Encrypt = true,
            TrustServerCertificate = false
        };

        var connection = new SqlConnection(builder.ConnectionString);

        var tokenRequestContext = new TokenRequestContext(new[] { "https://database.windows.net/.default" });
        var token = await _credential.GetTokenAsync(tokenRequestContext, cancellationToken);

        connection.AccessToken = token.Token;

        await connection.OpenAsync(cancellationToken);

        return connection;
    }
}
