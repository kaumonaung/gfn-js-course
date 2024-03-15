const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('Users Seite');
});

// :[NAME VOM PARAM] erstellt dynamische Routes
// Müssen dadurch nicht jede Route selber definiert, sondern Express erstellt sie für uns in Echtzeit
router.get('/users/:userId', (req, res) => {
  res.send(`User ${req.params.userId}`);
});

router.get('/users/:userId/:name', (req, res) => {
  res.send(`User ${req.params.userId}, Namen: ${req.params.name}`);
});

module.exports = router; // Exportieren das Router Objekt
