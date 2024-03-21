/*
Mongoose: https://mongoosejs.com/

Mongoose: Elegante Art und Weise Objektmodellierung für MongoDB zu implementieren

Mongoose bietet eine unkomplizierte, schema-basierte Lösung zur Modellierung der Anwendungsdaten, indem sie die Interaktion mit der MongoDB-Datenbank vereinfacht und strukturiert. 

Es ermöglicht Entwicklern, MongoDB-Schemata zu definieren, Modelle zu erstellen und Datenbankoperationen wie Speichern, Abfragen und Aktualisieren von Dokumenten einfach durchzuführen.

===== INSTALLATION =====
Mongoose Installation (wir brauchen KEIN "npm install mongodb" mehr mit Mongoose)

npm install mongoose

====== Um Environment Variables zu nutzen ======
npm install dotenv
*/

require('dotenv').config(); // Hier wird dotenv konfiguriert, damit können ".env" Dateien nutzen
const mongoose = require('mongoose');

const User = require('./models/User.schema.js');

// Verbindung zu MongoDB erstellen
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    dbName: 'gfn_test',
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // console.log(process.env);
  })
  .catch((error) => {
    // Fehlerbehandlung betreiben
    console.log('Es gab einen Fehler bei der Verbindung zu MongoDB ', error);
    console.log(process.env);
  });

// Einen User erstellen (new User.save() ODER User.create({}))
const createUser = async () => {
  try {
    // MODEL.create() um ein Dokument zu erstellen, falls keine Kollektion vorhanden, erstellt Mongoose eins für uns

    // METHODE #1:
    /* 
  await User.create({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      age: 30,
    }); 
    */

    // METHODE #2:
    const user = new User({
      name: 'Max Mustermann',
      email: 'max.mustermann@fake-email.com',
      age: 40,
    });

    await user.save();

    /*
    Erzeugt einen Error
  await User.create({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      age: 'abc', // Das schlägt fehlt, weil man versucht 'abc' in Number umzuwandeln
    });
    */
    console.log('User wurde erstellt');
  } catch (error) {
    console.log(error.message);
  }
};

// Einen User nach der ID finden (User.findById(ID))
const findUserById = async () => {
  const user = await User.findById('65fbf4b0ea96d57d605e9186');
  console.log(user);
};

// Einen User finden wo das Alter (age) höher als 10 ist
const findUserByAge = async () => {
  const users = await User.find({
    age: {
      $gt: 10, // Größer als 10
    },
  });

  console.log(users);
};

//
const queryUsers = async () => {
  // EN: $lte = less than or equal (<=), $lt = less than (<), $gte = greater than or equal (>=), $gt = greater than (>)
  // DE: $lte = kleiner als oder gleich (<=), $lt = kleiner als (<), $gte = größer als oder gleich (>=), $gt = größer als (>)
  const users = await User.where('age')
    .gt(10)
    .lte(40)
    .where('name')
    .equals('Max Mustermann');

  console.log(users);
};

// ======= FUNKTIONSAUFRUFE =======
// createUser();

// findUserById();

// findUserByAge();

queryUsers();
