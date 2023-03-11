const UserModel = require("./User")
const ProductModel = require("./Product")
const ReviewModel = require("./Reviews")
const CategoryModel = require('./Categories')
const OrderModel = require('./Orders')
const RoleModel = require('./Roles')


// Products associations
ProductModel.hasMany(ReviewModel, {foreignKey: {name: 'reviews'}})
ProductModel.hasOne(CategoryModel, {foreignKey: {name: 'product_category'}})

// Reviews associations
ReviewModel.hasOne(UserModel, {foreignKey: {name: 'user_id'}})
ReviewModel.hasOne(ProductModel, {foreignKey: {name: 'product_id'}})

//User associations
UserModel.hasMany(OrderModel, {foreignKey: {name: 'orders'}})
UserModel.hasOne(RoleModel, {foreignKey: {name: 'user_role'}})

// Orders associations
OrderModel.hasOne(UserModel, {foreignKey: {name: 'user_id'}})
OrderModel.hasOne(ProductModel, {foreignKey: {name: 'product_id'}})

module.exports = {
    UserModel,
    ProductModel,
    ReviewModel,
    CategoryModel,
    OrderModel,
    RoleModel
}