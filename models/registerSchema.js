const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerSchema = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  type: {
    type: String,
    enum: ['admin', 'user', 'guest'],
    required: true
  }
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
