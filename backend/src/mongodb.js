// CRUD
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = process.env.MONGODB_URL
const databaseName = 'MEVN-watch-shop'

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