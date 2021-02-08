// CRUD
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'MEVN-watch-shop'

const connectionURL = 'mongodb+srv://jason:1234@cluster0.zdrhc.mongodb.net'
const databaseName = 'mevn-watch-shop'

const products = require('../data/sampleData')
const Product = require('./models/productModel')

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }
  console.log('Database connected')
  const db = client.db(databaseName)

  db.collection('products').deleteMany()
  db.collection('products').insertMany(products)
})