const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
);

module.exports = Product;