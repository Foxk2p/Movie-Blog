const router = require('express').Router()
const { User, Post, Comment } = require('../models')

// GET all posts
router.get('/posts', (req, res) => {
  Post.findAll()
    .then(posts => res.json(posts))
    .catch(err => console.error(err))
})

// GET specific post
router.get('/posts/:id', (req, res) => {
  Post.findOne({ postId: req.params.id })
    .then(post => res.json(post))
    .catch(err => console.error(err))
})

//POST new post
router.post('/posts', (req, res) => {
  Post.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// PUT one post
router.put('/posts/:id', (req, res) => {
  Post.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one post
router.delete('/posts/:id', (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router