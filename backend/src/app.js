const express = require('express')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const cartRoutes = require('./routes/cartRoutes')
require('./db/mongoose')

const app = express()

app.use(express.json()) // Parse incoming request body to JSON


app.use(productRoutes)
app.use(userRoutes)
app.use(cartRoutes)

module.exports = app