const router = require("express").Router()
const controller = require("../controllers/Product")


// Get all products
router.get('/', controller.getProducts)
router.get('/:category', controller.getProducts)


module.exports = router