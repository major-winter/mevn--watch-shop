const express = require('express')
const router = express.Router()
const Product = require('../models/productModel')

// POST Create New Product
router.post('/api/products', (req, res) => {
  const product = new Product(req.body)

  product.save().then(() => {
    res.status(201).send(product)
  }).catch(error => {
    res.status(400).send('Invalid value')
  })
})

// GET get all products or get products by name
// /api/products?search=name
router.get('/api/products', async (req, res) => {
  try {
    const { search } = req.query

    if (search) {
      const product = await Product.findByName(search)
      res.send(product)
    }

    const products = await Product.find({})
    res.send(products)
  } catch (error) {
    res.status(500).send()
  }
})


// GET get 1 product by Id
router.get('/api/products/:id', async (req, res) => {
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
router.patch('/api/products/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['image', 'price', 'name', 'qty']
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update))

  if (!isValidUpdate) {
    res.status(400).send('Invalid update')
  }

  try {
    const product = await Product.findById(req.params.id)
    updates.forEach(update => product[update] = req.body[update])
    await product.save()

    if (!product) {
      return res.status(404).send({ error: 'Product not found!' })
    }

    res.send(product)
  } catch (error) {
    res.status(500).send()
  }
})

module.exports = router