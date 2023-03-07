const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

let opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'

const jwt = new JwtStrategy(opts, (jwt_payload, done)=>{
    console.log(jwt_payload)
})

module.exports = jwt