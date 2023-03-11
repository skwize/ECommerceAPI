const { DataTypes } = require("sequelize")
const sequelize = require("../utils/sequelize")


const CategoryModel = sequelize.define('Categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = CategoryModel