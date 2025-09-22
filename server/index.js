const express = require('express');
const app = express();
const cors = require('cors');
const participantService = require('./services/participantService');
const participants = require('./participantData.json');
const PORT = 3001;
app.use(cors());

app.get('/', (req, res) => {
  res.send(participants.participants);
});

app.get('/participant/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const participant = await participantService.getParticipantById(id);
   // console.log(participant)
    if (participant) {
      res.json(participant);
    } else {
      res.status(404).json({ error: 'Participant not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/participant/audit-report/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const participant = await participantService.getParticipantAuditReportById(id);
    console.log(participant)
    if (participant) {
      res.json(participant);
    } else {
      res.status(404).json({ error: 'Participant not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/participant/program-history/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const participant = await participantService.getParticipantProgramHistory(id);
    console.log('index',participant)
    if (participant) {
      res.json(participant);
    } else {
      res.status(404).json({ error: 'Participant not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/participant/family-details/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const familyDetails = await participantService.getParticipantFamilyDetails(id);
    console.log('index',familyDetails)
    if (familyDetails) {
      res.json(familyDetails);
    } else {
      res.status(404).json({ error: 'familyDetails not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/participant/support-period/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const supportedPeriod = await participantService.getParticipantSupportPeriod(id);
    console.log('index',supportedPeriod)
    if (supportedPeriod) {
      res.json(supportedPeriod);
    } else {
      res.status(404).json({ error: 'Support Period not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/participants/search', (req, res) => {
  const query = (req.query.query || '').toLowerCase();
  const type = req.query.type;

  let result = participants.participants.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  if (type && type !== 'Participant') {
    result = result.filter(p => p.type === type);
  }

  res.json(result);
});





app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
