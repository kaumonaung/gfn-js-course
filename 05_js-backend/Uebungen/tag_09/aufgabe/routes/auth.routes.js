const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User.schema');

router.post('/register', async (req, res) => {});

router.post('/login', async (req, res) => {});

module.exports = router;
