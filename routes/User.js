const router = require("express").Router()
const multer = require("multer")
const passport = require("passport")
const controller = require("../controllers/User")
let upload = multer({dest: `../public/`})

// Get user data
router.get('/',/*  passport.authenticate('jwt', {session: false}), */ controller.getData)
// Get data of other User
router.get('/',/*  passport.authenticate('jwt', {session: false}), */ controller.getOtherUser)

// User settings routes
router.patch('/settings/avatar/upload', upload.single('avatar'), controller.settings.changeAvatar)
router.patch('/settings/email/change', /* Here must be a passport-jwt but my database is empty :D */ controller.settings.changeEmail)
router.patch('/settings/username/change', /* Here must be a passport-jwt but my database is empty :D */ controller.settings.changeUsername)
router.patch('/settings/password/change', /* Here must be a passport-jwt but my database is empty :D */ controller.settings.changePassword)

module.exports = router