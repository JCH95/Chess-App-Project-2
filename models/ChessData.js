const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class ChessData extends Model { }

// create fields/columns for ChessData model
ChessData.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        wins: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        losses: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        elo: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 700.00
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'chessData'
    }
);

module.exports = ChessData;
