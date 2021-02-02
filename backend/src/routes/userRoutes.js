const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

// GET get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (error) {
    res.status(500).send()
  }
})

// GET get 1 user by Id
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).send('User not found')
    }

    res.send(user)
  } catch (error) {
    res.status(500).send()
  }
})


// POST create new user
// @endpoint /users
// @access Public
router.post('/users', (req, res) => {
  const user = new User(
    req.body
  )

  user.save().then(() => {
    res.status(201).send(user)
  }).catch(error => {
    res.status(400).send(error.message)
  })
})


// PATCH update a user
router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ["username", "email", "password", "age"]
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update)
  )

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' })
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!user) {
      return res.status(404).send('User not found')
    }

    res.send(user)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

// DELETE Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(404).send('User not found!')
    }

    res.send(user)
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router