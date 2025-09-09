const sql = require('mssql');

const config = {
  server: 'nkmanre2rtoenfr6dkk3gsjhb4-y3n5fc7aubuuja37yhj7e3xgli.datawarehouse.fabric.microsoft.com',
  database: 'lh_bz_eto_migration',
  authentication: {
    type: 'azure-active-directory-password',
    options: {
      userName: 'karthika.subramani@micahprojects.org.au',
      password: 'Taari@0109'
    }
  },
  options: {
    encrypt: true,
    trustServerCertificate: false  
  }
};



// Exported function to get the pool
async function getSqlPool() {
  try {
    // If pool already exists, use it
    if (sql.globalConnectionPool) {
      return sql.globalConnectionPool;
    }

    console.log('Connecting, pool is (should be undefined):', sql.globalConnectionPool);
    console.log('Connecting config:', JSON.stringify(config, null, 2));
    // Connect and store pool for future reuse
    if (config.authentication && config.authentication.options) {
  delete config.authentication.options.clientId;
}
    const pool = await sql.connect(config);
   sql.globalConnectionPool = pool;
   console.log('Pool established:', sql.globalConnectionPool); // Should show pool object

    return 'pool';
  } catch (error) {
    console.error('SQL pool connection failed:', error);
    throw error;
  }
}

module.exports = getSqlPool;
