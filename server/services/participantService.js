const participantDao = require('../dao/participantDao');

async function getAllParticipants() {
  // Business logic, validation, extra processing if needed
  return await participantDao.fetchParticipants();
}

async function getParticipantById(id) {
  if (!id) throw new Error('Participant ID is required');
  // Any other business logic/validation can go here
  return await participantDao.fetchParticipantById(id);
}

module.exports = {
  getAllParticipants,
  getParticipantById
};
