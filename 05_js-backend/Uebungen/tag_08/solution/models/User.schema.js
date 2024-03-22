const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: {
    type: Number,
    immutable: true,
  },
});

module.exports = mongoose.model('User', userSchema);
