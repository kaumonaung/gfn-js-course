const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users Seite');
});

// :[NAME VOM PARAM] erstellt dynamische Routes
// Müssen dadurch nicht jede Route selber definiert, sondern Express erstellt sie für uns in Echtzeit
router.get('/:userId', (req, res) => {
  res.send(`User ${req.params.userId}`);
});

router.get('/:userId/:name', (req, res) => {
  res.send(`User ${req.params.userId}, Namen: ${req.params.name}`);
});

// Exportieren das Router Objekt
module.exports = router;
