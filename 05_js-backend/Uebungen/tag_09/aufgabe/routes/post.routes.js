const express = require('express');
const router = express.Router();

const Post = require('../models/Post.schema');
const verifyToken = require('../middlewares/verifyToken.middleware');

router.get('/', async (req, res) => {});

router.post('/', verifyToken, async (req, res) => {});

router.patch('/:id', verifyToken, async (req, res) => {});

router.delete('/:id', verifyToken, async (req, res) => {});

module.exports = router;
