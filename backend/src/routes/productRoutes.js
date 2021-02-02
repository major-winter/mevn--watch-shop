const express = require('express')
const router = express.Router()
const Product = require('../models/productModel')

// POST Create New Product
router.post('/products', (req, res) => {
  const product = new Product(req.body)

  product.save().then(() => {
    res.status(201).send(product)
  }).catch(error => {
    res.status(400).send('Invalid value')
  })
})

// GET get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({})
    res.send(products)
  } catch (error) {
    res.status(500).send()
  }
})


// GET get 1 product by Id
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).send('Product not found!')
    }

    res.send(product)

  } catch (error) {
    res.status(500).send()
  }

})

// PATCH Update product 
router.patch('/products/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['image', 'price', 'name', 'qty']
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update))

  if (!isValidUpdate) {
    res.status(400).send('Invalid update')
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!product) {
      return res.status(404).send({ error: 'Product not found!' })
    }

    res.send(product)
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router