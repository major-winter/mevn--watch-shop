const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  cartItems: [
    {
      name: {
        type: String,
        required: true,
        default: ''
      },
      price: { type: Number, },

      purchaseQty: {
        type: Number,
        required: true,
        default: 1
      },
      countInStock: {
        type: Number,
      },
      image: {
        type: String,
        required: true
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      }
    }
  ]
}, { timestamps: true })


cartSchema.methods.udpateProductInCard = async function (productId, payload) {
  this.cartItems.forEach(item => {
    if (item._id == productId) {
      item.purchaseQty = payload
    }
  })
}

cartSchema.methods.deleteProductById = async function (productId) {
  this.cartItems = this.cartItems.filter(item => item.productId != productId)
  return this.cartItems

}

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart