const { builtinModules } = require('module');
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')
const User = require('./User')

const Repository = sequelize.define('Repository', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    public: {
        type: DataTypes.BOOLEAN,
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

module.exports = Repository