const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')
const User = require("./User")
const Repository = require("./Repository")

const Star = sequelize.define('Star', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: 'compositeIndex',
        references: {
            model: User,
            key: 'id',
        }
    },
    repository_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: 'compositeIndex',
        references: {
            model: Repository,
            key: 'id',
        }
    }
}, {
    timestamps: false
});

module.exports = Star