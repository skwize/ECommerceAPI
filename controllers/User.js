const User = require("../models/User")


module.exports = {
    newUser: async (req, res, next) => {
        try {
            const {username, email, password, orders = 0, cart = 0, createdAt} = req.body
            await User.create({
                username: username,
                email: email,
                password: password,
                orders: orders,
                cart: cart,
                createdAt: createdAt
            }).then(r=>{
                res.send(r)
            })

        } catch (err) {
            next(err)
        }
    },

    check: async (req, res, next)=> {
        try {
            console.log(req.body, req.file)
        } catch (err) {
            next()
        }
    },

    find: async (req, res, next) => {
        try {
            const user = await User.findByPk(1)
            res.send(user)
        } catch (err) {
            next(err)
        }
    }
}