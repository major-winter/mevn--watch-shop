const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
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
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate (value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email Address')
      }
    }
  },
  address: { type: String },
  profileImage: {
    type: String
  },

  tokens: [{
    token: {
      type: String,
      required: true
    }
  }],
})

userSchema.virtual('cart', {
  ref: 'Cart',
  localField: '_id',
  foreignField: 'owner'
})

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_KEY, { expiresIn: 3600000 })

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

userSchema.methods.toJSON = function () {
  const user = this

  const userObject = user.toObject()
  delete userObject.password
  delete userObject.tokens
  delete userObject.__v
  delete userObject._id
  return userObject
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('Unable to login')
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error('Unable to login')
  }
  return user
}

// Hashing password middleware
userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User

