require("dotenv").config()
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const bodyParser = require("body-parser")
const sequelize = require("./utils/sequelize")
const passport = require("passport")
const jwtStr = require("./utils/PassportJwtStrategy")

// Import routes
const {
  AuthRoute,
  UserRoute,
  ProductRoute,
  ReviewRoute
} = require("./routes")

// Import custom middlewares
const ReqBodyIsExist = require('./middlewares/CheckReqBody')
const ErrorHandler = require('./middlewares/ErrorHandler')


const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(helmet())

passport.use(jwtStr)

app.use(ReqBodyIsExist)

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/products', ProductRoute)
app.use('/reviews', ReviewRoute)

// Admin panel routes
app.use('/admin/products', ProductRoute)

app.use(app._router)
app.use(ErrorHandler)



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