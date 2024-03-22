/*
bcrypt: Passwort Hasher

npm install bcrypt

bcrypt.hash('meinpasswort', salt) => 432jsa832lsd932kkl#324

Beim Hashing:
- Wenn einmal das Passwort gehashed wurde, kann es NICHT wieder rückgängig gemacht werden
- Wenn ein User sich einloggt, dann wird sein Passwort auch gehashed und mit dem gehashed Passwort auf der Datenbank verglichen
- Wenn alle Parameter gleich sind (salt + Passwort), dann kriegt man immer das gleiche Ergebnis
- bcrypt.genSalt(NUMBER); => Je größer die Nummer, desto länger dauert das Hashing aber desto sicherer wird es
*/

const express = require('express');
const app = express();
const PORT = 3000;
const bcrypt = require('bcrypt');

app.use(express.json());

const users = [
  {
    name: 'Max Mustermann',
    password: '123456',
  },
];

app.get('/users', (req, res) => {
  res.json(users);
});

// Registriert den User
app.post('/users/register', async (req, res) => {
  const { name, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  console.log(salt);

  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    name: name,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(200).json(users);
});

// User einloggen
app.post('/users/login', async (req, res) => {
  const { name, password } = req.body;

  // Hier suchen wir ob ein User mit dem übergebenen Namen existiert
  const user = users.find((user) => {
    return user.name === name;
  });

  // Wenn kein User gefunden konnte
  if (!user) {
    return res.status(404).send('Nutzer konnte nicht gefunden werden');
  }
  // "password" wird intern gehashed mit dem Salt was in dem gespeicherten Passwort (in Hashform) vorhanden ist und vergleicht er beide gehashte Passwörter
  const hasCorrectPassword = await bcrypt.compare(password, user.password);

  if (hasCorrectPassword) {
    return res.status(200).send('Erfolgreich eingeloggt');
  } else {
    return res.status(400).send('Nicht erlaubt');
  }
});

app.listen(PORT);
