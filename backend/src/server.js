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

// Handle production
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public'))

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 5005

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})