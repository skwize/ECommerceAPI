const User = require("../models/User")


module.exports = {
    
    check: async (req, res, next)=> {
        try {
            console.log(req.body, req.file)
        } catch (err) {
            next()
        }
    },

    find: async (req, res, next) => {
        try {
            const user = await User.findByPk(req.user.id)
            res.send(user)
        } catch (err) {
            next(err)
        }
    }
}