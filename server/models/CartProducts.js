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
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'cartproducts'
    }
);

module.exports = CartProducts;