const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Cart = require('../models/cartModel')

// POST /cart
// @Description Create new cart
// @Access Private
router.post('/api/cart', auth, async (req, res) => {
  try {
    const { cartItems } = req.body
    const cart = new Cart({
      cartItems,
      owner: req.user._id
    })
    await cart.save()
    await req.user.populate('cart').execPopulate()
    res.send(cart)
  } catch (error) {
    res.status(400).send('No product to be added')
  }
})

// GET /cart
// @Description Get all cart items
// @Access Private
router.get('/api/cart', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ owner: req.user._id })
    if (cart === null) {
      return res.send({ message: 'You have no cart' })
    }
    res.send(cart)

  } catch (error) {
    res.status(400).send('Invalid information')
  }
})

// POST /api/cart/:id
// @Description Add items to cart
// @Access Private
router.post('/api/cart/:id', auth, async (req, res) => {
  try {
    const existedCart = await Cart.findById(req.params.id)

    if (existedCart) {
      const { cartItems } = req.body
      existedCart.cartItems = [...cartItems]
      await existedCart.save()
    }
    res.send(existedCart)

  } catch (error) {
    res.status(400).send('No product to be added')
  }
})

// POST /cart/:id
// @Description Update cart
// @Access Private
router.patch('/api/cart/:id', auth, async (req, res) => {
  try {
    const { productId, purQty } = req.query
    const existedCart = await Cart.findById(req.params.id)
    existedCart.udpateProductInCard(productId, purQty)
    await existedCart.save()
    res.send(existedCart)
  } catch (error) {
    res.status(400).send()
  }
})

// DELETE /cart/:id?productId=
// @Description Delete cart by id
// @Access Private
router.delete('/api/cart/:id', auth, async (req, res) => {
  try {
    const { productId } = req.query
    const cart = await Cart.findById(req.params.id)
    await cart.deleteProductById(productId)
    await cart.save()
    res.send(cart)
  } catch (error) {
    res.status(400).send()
  }
})



module.exports = router