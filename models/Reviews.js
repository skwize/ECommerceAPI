const { DataTypes } = require("sequelize")
const sequelize = require("../utils/sequelize")

const ReviewsModel = sequelize.define('Reviews', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true
    },
    product_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'Products',
            key: 'id'
        },
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    review_text: {
        type: DataTypes.TEXT,
    }
})

module.exports = ReviewsModel