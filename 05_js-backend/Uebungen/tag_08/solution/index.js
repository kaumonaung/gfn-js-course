require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();
const PORT = 3000;

const User = require('./models/User.schema');

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: 'gfn_test', // Name der Datenbank in MongoDB
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Alle Users anzeigen oder es wird gefiltert
app.get('/users', async (req, res) => {
  const { name, email } = req.query;

  try {
    if (name || email) {
      const query = name ? { name: name } : { email: email };

      const user = await User.findOne(query);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.json(user);
    }

    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Users nach Alter filtern
app.get('/users/age', async (req, res) => {
  const { min, max } = req.query;

  try {
    if (!min || !max) {
      return res.status(400).json({ message: 'min and max are required' });
    }

    const users = await User.where('age').gte(min).lte(max);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Einen neuen User erstellen
app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const user = new User({ name, email, age });
    await user.save();

    // Alternativ über MODEL.create()
    // await User.create({name, email, age })

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Einen User aktualisieren
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  try {
    const user = await User.findById({ _id: id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = name;
    user.email = email;
    user.age = age;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Einen User löschen
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.deleteOne();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
