const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Cart = require('../models/cartModel')
const Product = require('../models/productModel')
const User = require('../models/userModel')

// GET /cart
// @Description Get all cart items
// @Access Private
router.get('/cart', auth, (req, res) => {
  res.send('cart')
})

// POST /cart
// @Description Add items to cart
// @Access Private
router.post('/cart', auth, async (req, res) => {
  const product = await Product.findById(req.body._id)

  const cart = new Cart({
    cartItems: [product],
    owner: req.user._id
  })

  res.send(cart)
  console.log(product)
})

module.exports = router