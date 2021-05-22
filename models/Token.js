const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')
const User = require('./User')

const Token = sequelize.define('Token', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
            
        }
    }
    
}, {
    timestamps: false
})

module.exports = Token 