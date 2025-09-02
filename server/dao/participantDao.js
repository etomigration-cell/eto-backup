const getSqlPool = require('../db/db_connection'); // or your pool function
const participants = require('../participantData.json');

async function fetchParticipants() {
  const pool = await getSqlPool();
  const result = await pool.request().query('SELECT * FROM Participants');
  return result.recordset;
}

async function fetchParticipantById(id) {
 // const pool = await getSqlPool();
  const participant = participants.participants[id];
  return participant;
}

module.exports = {
  fetchParticipants,
  fetchParticipantById
};
