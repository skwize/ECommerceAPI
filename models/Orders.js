const { DataTypes } = require("sequelize")
const sequelize = require("../utils/sequelize")


const OrderModel = sequelize.define('Orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    user_id: {
        type: DataTypes.INTEGER,
        /* references: {
            model: 'User',
            key: 'id'
        }, */
        allowNull: false
    },

    product_id: {
        type: DataTypes.INTEGER,
        /* references: {
            model: 'Products',
            key: 'id'
        }, */
        allowNull: false
    },

    product_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


module.exports = OrderModel