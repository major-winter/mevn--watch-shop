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
  try {
    const { cartItems } = req.body
    const cart = new Cart({
      cartItems,
      owner: req.user._id
    })
    cart.save()
    res.send(cart)
  } catch (error) {
    res.status(400).send('No product to be added')
  }
})

// POST /cart
// @Description Update cart
// @Access Private
router.patch('/cart/:id', auth, async (req, res) => {
  try {
    console.log(req.body)
  } catch (error) {

  }
})



module.exports = router