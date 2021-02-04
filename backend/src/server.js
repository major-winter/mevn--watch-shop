const express = require('express')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const cartRoutes = require('./routes/cartRoutes')
require('./db/mongoose')

dotenv.config()
const app = express()

app.use(express.json()) // Parse incoming request body to JSON

app.use(productRoutes)
app.use(userRoutes)
app.use(cartRoutes)

const port = process.env.PORT || 5005

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})