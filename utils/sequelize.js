const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('eCommerce', 'root', '',{
    host: "localhost",
    dialect: "mysql",
    define: {
        freezeTableName: true
    }
})

module.exports = sequelize