const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    trim: true,
    required: true
  },
  qty: {
    type: Number,
    validate: function (value) {
      if (value < 0) {
        throw new Error('Quantity can not be a negative number')
      }
    },
    default: 0
  }
})

productSchema.statics.findByName = async function (search) {
  const searchingProduct = await Product.find({ name: { $regex: search, $options: '$i' } })
  if (searchingProduct.length === 0) {
    return { message: 'Product Not Found. Please try another search!' }
  }
  return searchingProduct
}

const Product = mongoose.model('Product', productSchema)
module.exports = Product