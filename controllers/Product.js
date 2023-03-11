const { ProductModel } = require("../models/models")

module.exports = {
    
    getProducts: async (req, res, next) => {
        try {
            const product = await ProductModel.findAll()
            res.status(200).json(product)
            
        } catch (err) {
            next(err)
        }
    },

    getProductsWithCategory: async (req, res, next) => {
        try {
            const category = req.body.category

            const result = await ProductModel.findAll({
                where: {
                    product_category: category
                }
            })

            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    },

    
    adminPanel: {
        create: async (req, res, next) => {

            const {product_name, product_category, product_description, price, quantity} = req.body
    
            const newProduct = await ProductModel.create({
                product_name: product_name,
                product_description: product_description,
                product_category: product_category,
                price: price,
                quantity: quantity
            })
    
            res.status(201).json(newProduct)
        }
    },

    edit: async (req, res, next) => {
        try {
            const {productId, name, description, category, price, quantity} = req.body
            const product = await ProductModel.findByPk(productId)
            
        } catch (err) {
            next(err)
        }
    }
}