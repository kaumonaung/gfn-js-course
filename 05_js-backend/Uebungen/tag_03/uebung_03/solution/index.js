const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // So schalten wir EJS frei

const dynamicData = {
  title: 'My Express App',
  description: 'homepage',
};

app.get('/', (req, res) => {
  res.render('index', dynamicData);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
