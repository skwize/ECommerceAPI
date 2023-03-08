const ProductModel = require("../models/Product")

module.exports = {
    
    getProducts: async (req, res, next) => {
        try {
            if(!req.body){
                return res.status(400).json({
                    error: "Bad Request"
                })
            }

            const product = await ProductModel.findAll()

            res.status(200).json(...product)

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

            res.status(200).json(...result)
        } catch (err) {
            next(err)
        }
    }
}