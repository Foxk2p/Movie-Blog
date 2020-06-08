const sequelize = require('../connection')
const { Model, DataTypes } = require('sequelize')

class Comment extends Model { }

Comment.init({
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, { sequelize, modelName: 'comment' })

// Comment.sync()

module.exports = Comment
