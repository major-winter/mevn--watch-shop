const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/MEVN-watch-shop'

const connectDB = async () => {
  try {
    await mongoose.connect(connectionURL, { useNewUrlParser: true, useCreateIndex: true })
    console.log('Database connected!')
  } catch (error) {
    console.log('Error', error)
  }
}

connectDB()