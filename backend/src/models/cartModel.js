const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  cartItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product'
    }
  ]
}, { timestamps: true })

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart