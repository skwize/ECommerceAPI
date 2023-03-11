const router = require("express").Router()
const controller = require("../controllers/Product")


// Get all products
router.get('/', controller.getProducts)
router.get('/:category', controller.getProducts) // Need to testing

// Admin panel routes
router.post('/create', controller.adminPanel.create)
router.path('/edit', controller.adminPanel.edit)


module.exports = router