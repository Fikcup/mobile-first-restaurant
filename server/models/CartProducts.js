const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class CartProducts extends Model {}

CartProducts.init(
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false,
            unique: true,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'cartproducts'
    }
);

module.exports = CartProducts;