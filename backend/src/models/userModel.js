const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    validate (value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Your password can not contain password')
      }
    }
  },
  // age: {
  //   type: Number,
  //   required: true,
  //   validate (value) {
  //     if (value < 18) {
  //       throw new Error("You're under age")
  //     }
  //   }
  // },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate (value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email Address')
      }
    }
  },
  address: { type: String },
  profileImage: {
    type: String
  }
})

module.exports = User

