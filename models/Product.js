const { DataTypes } = require("sequelize")
const sequelize = require("../utils/sequelize")

const ProductModel = sequelize.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_description:{
        type: DataTypes.TEXT,
    },
    product_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        /* references: {
            model: 'Categories',
            key: 'id'
        } */
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    reviews: {
        type: DataTypes.INTEGER,
        /* references: {
            model: 'Reviews',
            key: 'id'
        } */
    },
    average_rate: {
        type: DataTypes.FLOAT
    }

})

module.exports = ProductModel