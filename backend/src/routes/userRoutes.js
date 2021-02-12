const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const Cart = require('../models/cartModel')
const auth = require('../middleware/auth')

// GET get all users
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user)
})

// POST create new user
// @endpoint /users
// @access Public
router.post('/api/users', async (req, res) => {
  try {
    const user = new User(
      req.body
    )
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (error) {
    res.status(400).send(error.message)
  }

})

// POST login user
router.post('/api/users/login', async (req, res) => {
  try {
    const { email, password, token: userToken } = req.body
    const user = await User.findByCredentials(email, password)

    const existedToken = user.tokens.find(item => item.token == userToken)

    const cart = await Cart.findOne({ owner: user._id })
    if (existedToken) {
      if (cart) {
        return res.send({ user, token: existedToken.token, cartId: cart._id })
      } else {
        return res.send({ user, token: existedToken.token })
      }
    }
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (error) {
    res.status(400).send({ message: 'Invalid username or password' })
  }
})

// POST logout user
router.post('/api/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })

    await req.user.save()

    res.send()
  } catch (error) {
    res.status(500).send()
  }
})

// POST logout all user
router.post('/api/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save()
    res.send()
  } catch (error) {
    res.status(500).send()
  }
})


// PATCH update a user
router.patch('/api/users/me', auth, async (req, res) => {
  const updates = cart.keys(req.body)
  const allowedUpdates = ["username", "email", "password", "age"]
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update)
  )

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' })
  }

  try {
    const user = req.user

    updates.forEach(update => user[update] = req.body[update])

    await user.save()

    res.send(user)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

// DELETE Delete user
router.delete('/api/users/me', auth, async (req, res) => {
  try {
    await req.user.remove()
    res.send(req.user)
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router