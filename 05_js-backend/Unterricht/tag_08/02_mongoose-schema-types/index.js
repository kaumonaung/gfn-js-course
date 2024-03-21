require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/UserSchema.js');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  dbName: 'gfn_test',
});

const createUser = async () => {
  try {
    const user = await User.create({
      name: 'Lisa Simpsons',
      age: 12,
      scores: [98, 94, 92, 91],
      address: {
        street: '742 Evergreen Terrace',
        city: 'Springfield',
        zip: '48312',
      },
    });

    console.log('Nutzer wurde erstellt: ', user);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect(); // Verbindung zu MongoDB wird mithilfe von Mongoose abgebrochen
  }
};

createUser();
