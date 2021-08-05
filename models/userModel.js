const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please input your name!'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please input your email address!'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Please enter a valid email address!']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please input your password!'],
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!']
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
