const { DataTypes } = require("sequelize")
const sequelize = require("../utils/sequelize")

const UserModel = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    orders: {
        type: DataTypes.INTEGER,
        /* references: {
            model: 'Orders',
            key: 'id'
        } */
    },
    user_role: {
        type: DataTypes.INTEGER,
       /*  references: {
            model: 'Roles',
            key: 'id'
        }, */
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
})

module.exports = UserModel