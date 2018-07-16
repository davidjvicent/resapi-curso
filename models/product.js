const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    picture: String,
    price: { type: String, default: 0 },
    category: { type: String, enum: ['computers', 'phones', 'accesories'] },
    description: String
})

module.exports = mongoose.model('Product', productSchema)