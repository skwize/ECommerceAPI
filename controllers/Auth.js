const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserModel } = require('../models/models')

function genToken (data){
    const payload = {
        id: data.id,
        email: data.email,
    }
    return jwt.sign(payload, 'secret', {expiresIn: '3d'})
}

module.exports = {
    signIn: async (req,res,next) => {
        const {email, password} = req.body

        const candidate = await UserModel.findOne({where: {email: email}})

        if(!candidate){
            return res.json({
                error: "Incorrect email"
            })
        }

        if(!await bcrypt.compare(password, candidate.password)){
            return res.json({
                error: "Incorrect password"
            })
        }

        res.json({
            token: genToken(candidate)
        })


    },
    signUp: async (req, res, next) => {
        try {

            const {username, email, password} = req.body
            const hash = await bcrypt.hash(password, 7)

            await UserModel.create({
                username: username,
                email: email,
                password: hash
            })
            .then(user => {
                res.json({
                    token: genToken(user)
                })
            })

        } catch (err) {
            next(err)
        }
    }
}