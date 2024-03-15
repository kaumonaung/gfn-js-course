const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const id = req.query.id;

  if (id) {
    res.status(201).send(id);
  } else {
    res.status(200).send('Hello World');
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
