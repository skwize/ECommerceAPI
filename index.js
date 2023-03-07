require("dotenv").config()
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const bodyParser = require("body-parser")
const sequelize = require("./utils/sequelize")
const passport = require("passport")
const jwtStr = require("./utils/PassportJwtStrategy")
const jwt = require("jsonwebtoken")


const { AuthRoute, UserRoute } = require("./routes")


const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(helmet())

passport.use(jwtStr)

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.get('/jwt', (req, res)=>{
  res.send(
    jwt.sign({id:"asd1w4v224"}, 'secret', {expiresIn:'10min'})
  )
})









async function start () {
    try {

        await sequelize.authenticate();
        await sequelize.sync()

        app.listen(port, (err)=>{
            if (err) throw err
            console.log(`\nServer started!\nURL: http://localhost:${port}`)
        })

        console.log('\nDatabase was connected.\nAll models was synchronized!');
      } catch (error) {
        console.error(error);
      }
}

start()