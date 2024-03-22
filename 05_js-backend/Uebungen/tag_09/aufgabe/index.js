require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connection zu MongoDB mit Mongoose erstellen

// Auth Routes importieren und hinzufügen

// Post Routes importieren und hinzufügen

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
