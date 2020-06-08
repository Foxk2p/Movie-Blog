const router = require('express').Router()
const { Search } = require('../controllers')
const { Post } = require('../models')
const axios = require('axios')

router.get('/search/:search/:postBody', (req, res) => {
	console.log('connected...')
	// Search.searchMovies(req, res)
	const { search, postBody } = req.params
	console.log('search: ', search)
	axios
		.get(`http://www.omdbapi.com/?t=${search}&apikey=${process.env.OMDBAPIKEY}`)
		.then(({ data }) => {
			const post = {
				title: data.Title,
				poster: data.Poster,
				director: data.Director,
				genre: data.Genre,
				starring: data.Actors,
				plot: data.Plot,
				mpaaRating: data.Rated,
				body: postBody,
				userId: 1,
			}
			// console.log(users.data)
			Post.create(post)
				.then((dbData) => res.status(200).send(dbData))
				.catch((err) => console.error(err))
		})
		.catch((err) => console.error(err))
})

module.exports = router
