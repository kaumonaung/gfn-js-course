require('dotenv').config();
const mongoose = require('mongoose');

// User Modell von "models" Ordner importieren
const User = require('./models/User.schema');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  dbName: 'gfn_test',
});

const createUser = async () => {
  // OHNE EMAIL: Schlägt fehlt, weil wir keine E-Mail haben
  /*   await User.create({
    name: 'Max Mustermann',
    age: 42,
  });
 */

  // MIT EMAIL: Die E-Mail ist großgeschrieben
  await User.create({
    name: 'Max Mustermann',
    email: 'MAX.MUSTERMANN@MUSTEREMAIL.COM',
    age: 42,
  });

  console.log('User wurde erstellt');
};

const createUserAge = async () => {
  try {
    // Maximum Alter wird überschritten
    /*
    const user = await User.create({
      name: 'Lana Doe',
      email: 'LANA.DOE@MUSTEREMAIL.COM',
      age: 200,
    });
     */

    // Das Alter ist eine ungerade Zahl
    const user = await User.create({
      name: 'Lana Doe',
      email: 'LANA.DOE@MUSTEREMAIL.COM',
      scores: [70, 92, 95, 100],
      age: 30,
    });

    console.log(user);
  } catch (error) {
    console.log(error.message);
  } finally {
    mongoose.disconnect();
  }
};

const createUserDate = async () => {
  try {
    const user = await User.create({
      name: 'Bart Simpsons',
      email: 'bart@springfield.com',
    });

    console.log(user);
  } catch (error) {
    console.log(error.message);
  } finally {
    mongoose.disconnect();
  }
};

const callCustomFunctionFromSchema = async () => {
  const lanaDoe = await User.findById('65fc0abe5fc2d67f8fe3b0d8');
  lanaDoe.printScores();
};

// ===== FUNKTIONSAUFRUFE =====

// createUser(); // => Step 1 und 2
// createUserAge(); // => Step 3 und 4
// createUserDate(); // => Step 3
// allCustomFunctionFromSchema(); // => Step 5
