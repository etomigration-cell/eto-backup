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
    if (participant) {
      res.json(participant);
    } else {
      res.status(404).json({ error: 'Participant not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/participants/search', (req, res) => {
  const query = (req.query.query || '').toLowerCase();
  const type = req.query.type;

  let result = participants.participants.filter(p =>
    p.name.toLowerCase().includes(query) ||
    (p.Alias && p.Alias.toLowerCase().includes(query)) ||
    (p.email && p.email.toLowerCase().includes(query))
  );

  if (type && type !== 'Participant') {
    result = result.filter(p => p.type === type);
  }

  res.json(result);
});





app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
