const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  next();
}

module.exports = verifyToken;
