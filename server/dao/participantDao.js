const getSqlPool = require('../db/db_connection'); // or your pool function

async function fetchParticipants() {
  const pool = await getSqlPool();
  const result = await pool.request().query('SELECT * FROM Participants');
  return result.recordset;
}

async function fetchParticipantById(id) {
  const pool = await getSqlPool();
  const result = await pool
    .request()
    .input('id', getSqlPool().VarChar, id) // or .Int if id is integer
    .query('SELECT * FROM Participants WHERE id = @id');
  return result.recordset[0] || null; // Return first result or null
}

module.exports = {
  fetchParticipants,
  fetchParticipantById
};
