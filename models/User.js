const sequelize = require('../connection')
const { Model, DataTypes } = require('sequelize')

class User extends Model { }

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'user' })

// User.sync()

module.exports = User
