const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Deal extends Model {}

Deal.init(
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        imgPath: {
            type: DataTypes.STRING,
            unique: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'deal'
    }
);

module.exports = Deal;