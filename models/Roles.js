const { DataTypes } = require("sequelize")
const sequelize = require("../utils/sequelize")

const RoleModel = sequelize.define('Roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = RoleModel