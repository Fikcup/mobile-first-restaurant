const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
    {

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Category;