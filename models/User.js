const sequelize = require('../connection')
const { Model, DataTypes } = require('sequelize')

class User extends Model { }

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
     first_name: {
       type: DataTypes.STRING,
       allowNull: false
     },
     last_name: {
      type: DataTypes.STRING,
      allowNull: false
     }
  // password: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // }
}, { sequelize, modelName: 'user', timestamps: false })

User.sync()

module.exports = User
