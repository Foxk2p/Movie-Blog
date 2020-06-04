const router = require('express').Router()
const { User, Post, Comment } = require('../models')

// GET all users
router.get('/users', (req, res) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(err => console.error(err))
})

// GET specific user
router.get('/users/:id', (req, res) => {
  User.findOne({ id: req.params.id, include: [Post, Comment] })
  .then(user => res.json(user))
  .catch(err => console.error(err))
})

//POST new user
router.post('/users', (req, res) => {
  // req.boddy must be an object that satisfies both username and password requirements
  User.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// PUT one user
router.put('/users/:id', (req, res) => {
  // requests come in the req.body
  User.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one user
router.delete('/users/:username', (req, res) => {
  User.destroy({ where: { username: req.params.username } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router