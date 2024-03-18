/*
Routes sind spezifische URL-Pfade, die definiert werden, um Anfragen von Benutzern an die entsprechenden HTTP-Anfragen zu steuern und die richtigen Inhalte oder Aktionen basierend auf der vom Benutzer angeforderten URL auszuführen

separation of concerns: Wir teilen damit die Gewalten/Logik/Prozesse auf
*/

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Willkommen auf der Startseite');
});

app.get('/about', (req, res) => {
  res.send('Über Uns Seite');
});

app.get('/contact', (req, res) => {
  res.send('Kontakt Seite');
});

// Hier importieren wir unser selbst erstelltes User Router
const usersRouter = require('./routes/users.routes.js');
// Hier nutzen wir den Router, der erste Parameter definiert den Startpunkt für die Routes
app.use('/users', usersRouter);

/* 
OHNE DEN ROUTER OBJEKT IN routes/users.routes.js

app.get('/users', (req, res) => {
  res.send('Users Seite');
});

// :[NAME VOM PARAM] erstellt dynamische Routes und sind die Route-Parameter
// Müssen dadurch nicht jede Route selber definiert, sondern Express erstellt sie für uns in Echtzeit
app.get('/users/:userId', (req, res) => {
  res.send(`User ${req.params.userId}`);
});

app.get('/users/:userId/:name', (req, res) => {
  res.send(`User ${req.params.userId}, Namen: ${req.params.name}`);
}); 
*/

app.listen(PORT);
