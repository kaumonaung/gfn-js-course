/*
Schema Types:
- String
- Number
- Date
- Boolean
- Arrays
- Object
- mongoose.SchemaTypes.ObjectId
*/

const mongoose = require('mongoose');

// Optional, man kann auch einfach das direkt in "userSchema" einfügen
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  zip: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
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
