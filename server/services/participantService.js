const participantDao = require('../dao/participantDao');

async function getAllParticipants() {
  // Business logic, validation, extra processing if needed
  return await participantDao.getParticipants();
}

async function getParticipantById(id) {
  if (!id) throw new Error('Participant ID is required');
  // Any other business logic/validation can go here
  return await participantDao.getParticipantById(id);
}

async function getParticipantAuditReportById(id) {
  if (!id) throw new Error('Participant ID is required');
  // Any other business logic/validation can go here
  return await participantDao.getParticipantAuditReportById(id);
}

async function getParticipantProgramHistory(id) {
  if (!id) throw new Error('Participant ID is required');
  // Any other business logic/validation can go here
  return await participantDao.getParticipantProgramHistory(id);
}

async function getParticipantFamilyDetails(id) {
  if (!id) throw new Error('Participant ID is required');
  // Any other business logic/validation can go here
  return await participantDao.getParticipantFamilyDetails(id);
}

async function getParticipantSupportPeriod(id) {
  if (!id) throw new Error('Participant ID is required');
  // Any other business logic/validation can go here
  return await participantDao.getParticipantSupportPeriod(id);
}

module.exports = {
  getAllParticipants,
  getParticipantById,
  getParticipantAuditReportById,
  getParticipantProgramHistory,
  getParticipantFamilyDetails,
  getParticipantSupportPeriod
};
