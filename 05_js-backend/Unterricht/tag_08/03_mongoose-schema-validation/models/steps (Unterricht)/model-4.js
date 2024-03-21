// STEP 5: Eigene Funktion erstellen für unser Schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 10,
    max: 100,
    validate: {
      validator: (value) => value % 2 === 0, // => Boolean wird zurückgegeben, überprüft ob "age" eine gerade Zahl ist
      message: (props) => `${props.value} ist keine gerade Zahl`,
    },
  },
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

// Middlewares
// pre - Vorher
userSchema.pre('save', (next) => {
  console.log(
    'Diese Middleware wird vor dem erstellen/speichern eines Dokuments aufgerufen'
  );
  // Praxisbeispiel wäre davor das Passwort zu hashen
  next();
});

// Nur Dokument Middleware
userSchema.pre('deleteOne', { document: true, query: false }, () => {
  console.log('Deleting doc!');
});

// post - Nachher
userSchema.post('save', () => {
  console.log(
    'Diese Middleware wird nach dem erstellen/speichern eines Dokuments aufgerufen'
  );
});

module.exports = mongoose.model('User', userSchema);
