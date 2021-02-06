const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  cartItems: [
    {
      productName: {
        type: String,
        default: ''
      },
      purchaseQty: {
        type: Number,
        default: 1
      },
      image: {
        type: String
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      }
    }
  ]
}, { timestamps: true })

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart