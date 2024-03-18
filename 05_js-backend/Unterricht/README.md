# Wie baut man einen Express-Server auf

1. `npm init -y` (erstellt package.json)
2. `npm install express`
3. `index.js` Datei erstellen
4. Folgenden Code eingeben:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server wurde erstellt');
});

app.listen(3000);
```
