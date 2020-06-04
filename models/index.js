const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment')

User.hasMany(Post)
Post.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

User.hasMany(Comment)
Comment.belongsTo(User)

module.exports = { User, Post, Comment }