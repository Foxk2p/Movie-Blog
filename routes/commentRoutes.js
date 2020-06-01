const router = require('express').Router()
const db = require('../db')

// Comment Routes

// GET all comments
router.get('/comments', (req, res) => {
  db.query('SELECT * FROM comments', (err, comments) => {
    if (err) { console.log(err) }
    res.json(comments)
  })
})

// POST comment
router.post('/comments', (req ,res) => {
  db.query('INSERT INTO comments SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router