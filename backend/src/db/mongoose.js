const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/MEVN-watch-shop'

const mongo_cloud = 'mongodb+srv://jason:1234@cluster0.zdrhc.mongodb.net/mevn-watch-shop'

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_cloud, { useNewUrlParser: true, useCreateIndex: true })
    console.log('Database connected!')
  } catch (error) {
    console.log('Error', error)
  }
}

connectDB()