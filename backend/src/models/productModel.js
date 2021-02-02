const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
  name: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    trim: true,
    required: true
  },
  qty: {
    type: Number,
    validate: function (value) {
      if (value < 0) {
        throw new Error('Quantity can not be a negative number')
      }
    },
    default: 0
  }
})

module.exports = Product