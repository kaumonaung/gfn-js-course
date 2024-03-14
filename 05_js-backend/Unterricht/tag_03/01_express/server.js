/*
Wenn package.json schon vorhanden ist und auch dependencies definiert sind, dann einfach NUR:

npm install

Davor um package.json zu erstellen:
npm init -y

Um Express zu installieren:
npm install express

Dann eine index.js ODER server.js Datei erstellen und folgende zwei Zeilen Code einfügen:

const express = require('express');
const app = express();


*/

const express = require('express');
const app = express();

// In dem Browser unter der Adresse "http://localhost:3000/" öffnen => zeigt "Cannot GET /"
app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});

/* 
Routes sind quasi URL, die bestimmen was wir zurückgeben vom Server

request (req):
- Enthält alle Informationen über die Anfrage des Clients (z.B. URL, Methode, Header, Body, etc.)

response (res):
- Enthält alle Informationen, die an den Client zurückgegeben werden (z.B. Statuscode, Header, Body, etc.)

next: next middleware function
- Wird verwendet, um die nächste Middleware-Funktion in der Reihenfolgder der Middleware-Funktionen aufzurufen
- Für Routing, wird next in der Regel nicht verwendet, sondern nur bei Middleware-Funktionen
- Sind Funktionen, die in der Anfrage-Antwort Zyklus aufgerufen werden.
- Die liegen zwischen der Anfrage und der Antwort
*/

app.get('/', (req, res, next) => {
  const query = req.query.suche; // solange "suche=..." vorhanden ist z.B. => http://localhost:3000?suche=hosen
  console.log(query);
  console.log(req.query.name); // solange "name=..." vorhanden ist z.B. =>  http://localhost:3000?name=max

  // res.sendStatus(200); // => OK
  // res.sendStatus(400); // => Bad Request
  // res.sendStatus(404); // => Not Found
  // res.sendStatus(500); // => Internal Server Error

  // res.status(200).send('Das ist eine Antwort vom Server');
  // res.status(404).send('Diese Seite wurde nicht gefunden');

  /* res.status(404).json({
    error: true,
    errorMessage: 'Es gab einen Fehler bei uns',
  }); */

  // res.download(__dirname + '/image.jpg'); // Hier werden Dateien heruntergeladen
  // res.status(200).sendFile(__dirname + '/image.jpg'); // Senden/Zeigen die Datei an

  res.json({
    message: 'This is the response from the server',
  });
});
