const sequelize = require('../connection')
const { Model, DataTypes } = require('sequelize')

class Post extends Model { }

Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  poster: {
    type: DataTypes.STRING,
    allowNull: true
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  starring: {
    type: DataTypes.STRING,
    allowNull: false
  },
  plot: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mpaaRating: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {sequelize, modelName: 'post' })

Post.sync()

module.exports = Post