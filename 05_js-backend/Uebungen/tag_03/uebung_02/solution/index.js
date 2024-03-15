const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
function logger(req, res, next) {
  const url = req.url;
  console.log(`Request received for ${url}`);
  next(); // ähnlich wie return
}

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', logger, (req, res) => {
  res.send('Test');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
