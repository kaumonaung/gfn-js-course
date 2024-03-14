const express = require('express');
const app = express();

const middlewareLogger = (req, res, next) => {
  console.log(`URL: ${req.url}`);
  next();
};

// Mit app.use() setzen wir Middlewares für alle Routen/Routes
app.use(middlewareLogger);

app.get('/', (req, res) => {
  res.send('Lesson 2');
});

app.listen(3000);
