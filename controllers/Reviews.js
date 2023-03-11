const {ReviewModel} = require("../models/models")


module.exports = {
    send: async (req, res, next) => {
        try {
            const {productId, rate, text} = req.body

            const newReview = await ReviewModel.create({
                user_id: req.user.id,
                product_id: productId,
                rate: rate,
                review_text: text
            })

            res.status(201).json(newReview)
            
        } catch (err) {
            next(err)
        }
    },
    
    edit: async (req, res, next) => {

    }
}