/*
JWT (JSON Web Token): https://jwt.io/

jsonwebtoken: npm install jsonwebtoken
*/

require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;

const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
  {
    username: 'Max',
    title: 'Post 1 von Max',
    body: 'Mein erster Blogbeitrag',
  },
  {
    username: 'John',
    title: 'Post 1 von John',
    body: 'Mein erster Blogbeitrag von John',
  },
];

// JWT Token wir verifiziert
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // console.log(authHeader);

  // authHeader && überprüft ob der authHeader NICHT undefined ist, dann wird der Code nach && ausgeführt
  const token = authHeader && authHeader.split(' ')[1]; // => hier wird <token> von dem Array ['Bearer', '<token>'] angesprochen
  console.log(token);

  if (token === null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) {
      // 403 HTTP-Status Forbidden
      return res.status(403).send('Nicht erlaubt');
    }

    // Hier fügen wir dem Request-Objekt (req) "user" hinzu
    req.user = data;
    next();
  });
};

app.get('/posts/all', (req, res) => {
  res.json(posts);
});

app.get('/posts', verifyToken, (req, res) => {
  const user = req.user;
  console.log(user); // => { username: 'Max', iat: <ZAHL> }

  console.log(posts);

  const userPosts = posts.filter((post) => post.username === user.username);

  console.log(userPosts);

  res.status(200).json({
    posts: userPosts,
  });
});

// Hier wird der Token erstellt
app.post('/login', (req, res) => {
  const username = req.body.username;

  const user = {
    username: username,
  };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.send(accessToken);
});

app.listen(PORT);
