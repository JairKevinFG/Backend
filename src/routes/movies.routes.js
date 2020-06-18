const { Router } = require('express')

const router = Router()

const {  renderMovies,renderMovie , createMovie,updateMovie,deleteMovie } = require('../controllers/movies.controller')

// Render movies
router.get('/', renderMovies)

// Render movie
router.get('/:id', renderMovie)

// Create movie
router.post('/new', createMovie)

//Update movie
router.put('/:id',  updateMovie)

//Delete movie
router.delete('/:id', deleteMovie)


module.exports = router
