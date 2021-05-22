const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')
const User = require('./User')

const Follower = sequelize.define('Follower', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    follower_username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'compositeIndex',
        references: {
            model: User,
            key: 'username',
        }
    },
    followed_username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'compositeIndex',
        references: {
            model: User,
            key: 'username',
            onDelete: "CASCADE"
        }
    }
    
}, {
    timestamps: false
    
})

module.exports = Follower