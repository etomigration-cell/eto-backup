const getSqlPool = require('../db/db_connection'); // or your pool function
const participants = require('../participantData.json');
const participantAuditReports = require('../participantAuditReports.json');
const participantProgramHistory = require('../participantProgramHistory.json');
const familyDetails = require('../familyDetails.json');
const supportPeriod = require('../supportPeriod.json');

async function getParticipants() {
  const pool = await getSqlPool();
  const result = await pool.request().query('SELECT * FROM Participants');
  return result.recordset;
}

async function getParticipantById(id) {
 // const pool = await getSqlPool();
  const participant = participants.participants[id === 0 ? 0 : id - 1];
  return participant;
}

async function getParticipantAuditReportById(id) {
 // const pool = await getSqlPool();
  const participant = participantAuditReports.auditReports.find(pa => pa.participantId === Number(id));
  return participant;
}

async function getParticipantProgramHistory(id) {
 // const pool = await getSqlPool();
 console.log('kilo',participantProgramHistory)
  const participant = participantProgramHistory.programHistory.find(pa => pa.participantId === Number(id));
  return participant;
}

async function getParticipantFamilyDetails(id) {
  const pool = await getSqlPool();
  console.log('kilo',familyDetails)
  const family = sql.connect(config)
  .then(pool => pool.request().query('SELECT * FROM FamilyMembers where CLID=38325'))
  .then(result => console.dir(result))
  .catch(err => console.error(err));
  return familyDetails.familyInformation;
}

async function getParticipantSupportPeriod(id) {
 // const pool = await getSqlPool();
  console.log('kilo',supportPeriod)
  const sp = supportPeriod.supportPeriods.find(pa => pa.id === Number(id));
  const supportPeriodDetails = supportPeriod.supportPeriodDetails.find(sp => sp.id === Number(id));
  return { supportPeriod : sp, supportPeriodDetails};
}

module.exports = {
  getParticipants,
  getParticipantById,
  getParticipantAuditReportById,
  getParticipantProgramHistory,
  getParticipantFamilyDetails,
  getParticipantSupportPeriod
};
