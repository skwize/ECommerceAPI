const { DataTypes } = require("sequelize")
const sequelize = require("../utils/sequelize")

const ReviewsModel = sequelize.define('Reviews', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    product_id:{
        type: DataTypes.INTEGER,
        /* references: {
            model: 'Products',
            key: 'id'
        }, */
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        /* references: {
            model: "User",
            key: 'id'
        }, */
        allowNull: false
    },
    rate: {
        type: DataTypes.FLOAT
    },
    review_text: {
        type: DataTypes.TEXT,
    }
})

module.exports = ReviewsModel