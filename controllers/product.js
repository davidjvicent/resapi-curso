const Product = require('../models/product')

const getProducts = async (req, res) => {
    // Product.find({}, (err, products) => {
    //     if (err) return res.status(500).send(`error al realizar la peticion: ${err}`)
    //     if (!products) return res.status(404).send({message: 'no existen productos'})

    //     res.status(200).send({products})
    // })

    const products = await Product.find()

    res.json(products)
}

const getProduct = async (req, res) => {
    // let productId = req.params.productId

    // Product.findById(productId, (err, product) => {
    //     if (err) return res.status(500).send(`error al realizar la peticion: ${err}`)
    //     if (!product) return res.status(404).send(`el producto no existe`)

    //     res.status(200).send({ product })
    // })

    const productId = req.params.productId

    const product = await Product.findById(productId)

    res.json(product)
}

const updateProduct = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.productId, req.body)

    res.json({
        status: 'producto actualizado'
    })
}

const deleteProduct = async (req, res) => {
    await Product.findByIdAndRemove(req.params.productId)

    res.json({
        status: 'producto eliminado'
    })
}

const saveProduct = async (req, res) => {
    // console.log('POST /api/product')
    // console.log(req.body)
    // let product = new Product()

    // product.name = req.body.name
    // product.picture = req.body.picture
    // product.price = req.body.price
    // product.category = req.body.category
    // product.description = req.body.description

    // product.save((err, productStored) => {
    //     if (err) res.status(500).send(`error al guardar en la base de datos: ${err}`)

    //     res.status(200).send({product: productStored})
    // })

    const product = new Product(req.body)

    await product.save()

    res.json({ status: 'producto guardado' })
}

module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    saveProduct
}