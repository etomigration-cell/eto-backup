using Azure.Core;
using Azure.Identity;
using Microsoft.Data.SqlClient;

public interface ISqlConnectionFactory
{
    Task<SqlConnection> CreateOpenConnectionAsync(CancellationToken cancellationToken = default);
}

public class SqlConnectionFactory : ISqlConnectionFactory
{
    private readonly string _connectionString;
    private readonly IWebHostEnvironment _env;

    public SqlConnectionFactory(IConfiguration configuration, IWebHostEnvironment env)
    {
        _env = env;

        // Must NOT contain username, password, or Authentication keyword
        _connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    public async Task<SqlConnection> CreateOpenConnectionAsync(CancellationToken cancellationToken = default)
    {
        var sqlBuilder = new SqlConnectionStringBuilder(_connectionString)
        {
            UserID = "",
            Password = "",
            Authentication = SqlAuthenticationMethod.NotSpecified // IMPORTANT
        };

        var connection = new SqlConnection(sqlBuilder.ConnectionString);

        TokenCredential credential;

        if (_env.IsDevelopment())
        {
            // LOCAL — opens browser login
            credential = new InteractiveBrowserCredential();
        }
        else
        {
            // AZURE — automatically uses Managed Identity
            credential = new DefaultAzureCredential();
        }

        // Fabric SQL scope
        var scope = new TokenRequestContext(new[] { "https://database.windows.net/.default" });

        var token = await credential.GetTokenAsync(scope, cancellationToken);

        connection.AccessToken = token.Token;

        await connection.OpenAsync(cancellationToken);

        return connection;
    }
}
