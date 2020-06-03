const orm = require('../orm')

module.exports = {
  getMovies (cb) {
    orm.getAll('movies', movies => cb(movies))
  },
  getMoviesWhere (where, cb) {
    orm.getAllWhere('movies', where, movies => cb(movies))
  }
}