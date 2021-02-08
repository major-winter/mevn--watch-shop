const express = require('express')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const cartRoutes = require('./routes/cartRoutes')
const path = require('path')
require('./db/mongoose')

dotenv.config()
const app = express()

app.use(express.json()) // Parse incoming request body to JSON


app.use(productRoutes)
app.use(userRoutes)
app.use(cartRoutes)


// static folder
app.use(express.static(path.join(__dirname, '/public')))

// Handle SPA
app.get(/.*/, (req, res) => res.sendFile(path.join((__dirname + '/public/index.html'))))


const port = process.env.PORT || 5005

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})