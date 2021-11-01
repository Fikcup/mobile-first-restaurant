const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init(
    {

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'cart'
    }
);

module.exports = Cart;