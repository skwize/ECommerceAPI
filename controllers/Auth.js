const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = {
    signIn: async (req,res,next)=>{
        res.send("Coming soon")
    },
    signUp: async (req, res, next) => {
        try {
            if(!req.body){
                return res.send("Bad Request")
            }
            const {username, email, password} = req.body
            const hash = await bcrypt.hash(password, 7)
            const newUser = await User.create({
                username: username,
                email: email,
                password: hash
            })

            res.status(201).send(newUser)
        } catch (err) {
            next(err)
        }
    }
}