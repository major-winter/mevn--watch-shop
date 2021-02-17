const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const mongo_cloud = process.env.MONGODB_CLOUD_URL

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_cloud, { useNewUrlParser: true, useCreateIndex: true })
    console.log(`Database connected! at ${mongo_cloud}`)
  } catch (error) {
    console.log('Error', error)
  }
}

connectDB()