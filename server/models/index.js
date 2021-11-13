const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Cart = require('./Cart');
const CartProducts = require('./CartProducts');

User.hasOne(Cart, {foreignKey: { allowNull: true }, onDelete: 'CASCADE'});
Category.hasMany(Product, {foreignKey: { allowNull: false }});
Product.belongsToMany(Cart, { through: 'CartProducts' }, {foreignKey: { allowNull: true }, onDelete: 'CASCADE'});

module.exports = { User, Product, Category, Cart, CartProducts };