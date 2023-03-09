const router = require("express").Router()
const multer = require("multer")
const passport = require("passport")
const controller = require("../controllers/User")
let upload = multer({dest: `../public/`})

// Will be deleted
router.get('/check', passport.authenticate('jwt', {session: false}), controller.check)

// find user by PK
router.get('/find', upload.single('avatar'), controller.find)

module.exports = router