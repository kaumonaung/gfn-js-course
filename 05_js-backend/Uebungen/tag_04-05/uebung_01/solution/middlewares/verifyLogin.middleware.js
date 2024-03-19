function verifyLogin(req, res, next) {
  const { username, password } = req.body;

  if (!req.body.username || !req.body.password) {
    return res.status(400).send('Username and password are required');
  }

  console.log('username: ' + username);
  console.log('password: ' + password);
  next();
}

module.exports = verifyLogin;
