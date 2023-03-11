const router = require("express").Router()
const passport = require("passport")
const controller = require("../controllers/Reviews")


router.post('/send', passport.authenticate('jwt', {session: false}), controller.send)
router.post('/edit', passport.authenticate('jwt', {session: false}), controller.edit)


module.exports = router