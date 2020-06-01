const router = require('express').Router()
// const { Movie } = require('TBD')

// GET all movies
router.get('/movies', (req, res) => {
  Movie.findAll()
    .then(movies => res.json(movies))
    .catch(err => console.error(err))
})

// GET movie
router.get('/movies/:id', (req, res) => {
  Movie.findOne({ id: req.params.id })
    .then(movie => res.json(movie))
    .catch(err => console.error(err))
})

// POST movie
router.post('/movies', (req, res) => {
  Movie.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// PUT movie
router.put('/movies/:id', (req, res) => {
  Movie.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE movie
router.delete('/movies/:id', (req, res) => {
  Movie.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})


module.exports = router
