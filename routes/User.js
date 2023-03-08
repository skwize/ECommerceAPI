const router = require("express").Router()
const multer = require("multer")
const passport = require("passport")
const controller = require("../controllers/User")
let upload = multer({dest: `../public/`})

// Will be deleted
router.post('/check', upload.single('avatar'), controller.check)

// find user by PK
router.get('/find', upload.single('avatar'), controller.find)

module.exports = router