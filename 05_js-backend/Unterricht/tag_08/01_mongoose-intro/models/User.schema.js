/*
Schema ist ein Bauplan der Datenbank. Es wird verwendet, um den Datentyp des Feldes zu definieren und einige Einschränkungen für die Daten festzulegen.

Ein Modell ist eine Klasse, mit der wir Dokumente erstellen. In Mongoose ist jedes Dokument eine Instanz seines Modells.
*/

const mongoose = require('mongoose');

// Hier wird ein Schema (Bauplan) erstellt und hier werden nur die Datentypen definiert
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Hier erstellt Mongoose ein Modell für uns, mit dem Modell interagieren wir mit der Datenbank
module.exports = mongoose.model('User', userSchema);
