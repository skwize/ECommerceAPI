const router = require("express").Router()
const multer = require("multer")
const controller = require("../controllers/User")
let upload = multer({dest: `../public/`})
const passport = require("passport")

router.post('/create', passport.authenticate('jwt'),controller.newUser)
router.post('/check', upload.single('avatar'), controller.check)
router.get('/find', upload.single('avatar'), controller.find)

module.exports = router