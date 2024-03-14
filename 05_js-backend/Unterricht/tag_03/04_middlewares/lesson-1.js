/*
Middlewares sind Funktionen, die aufgerufen werden, wenn eine Anfrage an den Server kommt und bevor der Server eine Antwort sendet
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server wurde erstellt');
});

const middlewareLogger = (req, res, next) => {
  console.log('Bin eine Middleware Funktion');
  // res.status(400).send('Nicht erlaubt'); // Kann auch Server Responses ausgeben und die Abfrage direkt beenden
  next();
};

const logger2 = (req, res, next) => {
  console.log('Middleware Funktion #2');
  next();
};

app.get('/users', middlewareLogger, logger2, (req, res) => {
  res.send('Users');
});

app.listen(3000);
