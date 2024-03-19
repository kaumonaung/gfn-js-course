const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

const authRouter = require('./routes/auth.route.js');
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
