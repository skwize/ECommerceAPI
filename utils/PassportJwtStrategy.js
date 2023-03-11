const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const { UserModel } = require("../models/models")

let opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'

const jwt = new JwtStrategy(opts,  async (jwt_payload, done)=>{
    const user = await UserModel.findOne({
        where: {
            id: jwt_payload.id
        },
        // To remove password from callback
        attributes: {
            exclude: 'password'
        }
    })
    if (!user) {
        return done(null, false)
    }
    return done(null, user.dataValues)
})

module.exports = jwt