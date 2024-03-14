const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server ist gestartet');
});

const middlewareOne = (req, res, next) => {
  console.log('Middleware One');
  next();
};

const middlewareTwo = (req, res, next) => {
  console.log('Middleware Two');
  next();
};

const middlewareThree = (req, res, next) => {
  console.log('Middleware Three');
  next();
};

// Middleware Reihenfolge (chronologisch in der Datei)
app.use(middlewareThree);
app.use(middlewareTwo);

app.get('/products', middlewareOne, middlewareThree, (req, res) => {
  res.send('Products');
});

app.listen(3000);
