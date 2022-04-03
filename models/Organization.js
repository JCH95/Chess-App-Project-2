const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Organization extends Model { }

Organization.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Remove if we have circular infinite loop!
        host_id: { // Trying to connect the host to the organization
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
        modelName: 'organization'
    }
);

module.exports = Organization;
