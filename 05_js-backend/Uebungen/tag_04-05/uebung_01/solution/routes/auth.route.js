const express = require('express');
const router = express.Router();

const verifyLogin = require('../middlewares/verifyLogin.middleware');

router.post('/login', verifyLogin, (req, res) => {
  res.send('Login successful');
});

module.exports = router;
