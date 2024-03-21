// STEP 3
// age soll min, max und einen Validator haben, der überprüft ob das Alter eine gerade Zahl ist
// createdAt soll ein default Datum bekommen (heutige Datum) und es soll nicht mehr änderbar (immutable) sein

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: Number,
  createdAt: Date,
  superUser: mongoose.SchemaTypes.ObjectId, // Referenzen zu anderen Dokumente basierend auf ihrer ObjectId
  isAdmin: Boolean,
  scores: [Number],
  address: {
    street: String,
    city: String,
    zip: String,
  },
});

module.exports = mongoose.model('User', userSchema);
