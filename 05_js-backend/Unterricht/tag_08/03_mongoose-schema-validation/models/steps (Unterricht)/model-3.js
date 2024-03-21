// STEP 4: Middleware erstellen, der aufgrerufen wird bevor wir ein neues Dokument erstellen oder ein Dokument speichern

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
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
    // => Datum wäre sonst immer gleich für alle Dokumente, wenn wir es nicht in einer Funktion es ausgeben
  },
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
