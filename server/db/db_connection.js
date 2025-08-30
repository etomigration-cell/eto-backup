const sql = require('mssql');

const config = {
  server: 'SATHISHRAMNATH\\MSSQLSERVER01',          // From "Server name"
  database: 'Test_DB',                               // Specify your database
  options: {
    encrypt: true,                                   // Encryption is mandatory
    trustServerCertificate: true                     // Trust server certificate is enabled
  },
  authentication: {
    type: 'ntlm',                                   // NTLM for Windows Authentication
    options: {
      domain: 'SATHISHRAMNATH',                     // Taken from user/domain in User name
      userName: 'SATHISHRAMNATH91961',              // Taken from User name field
      password: '1811'                              // Use actual password for the account
    }
  }
};



// Exported function to get the pool
async function getSqlPool() {
  try {
    // Check if pool already exists (singleton pattern)
    if (sql.globalConnectionPool) {
      return sql.globalConnectionPool;
    }

    // Create and store the connection pool
    const pool = await sql.connect(config);
    console.log(pool)
    sql.globalConnectionPool = pool; // Store pool for reuse
    return pool;
  } catch (error) {
    throw error;
  }
}

module.exports = getSqlPool;
