const { Router } = require('express')
const joi = require('@hapi/joi')
const {movieIdSchema,createMovieSchema,updateMovieSchema} = require('../utils/schemas/movies')
const validationHandler = require('../utils/middleware/validationHandler')
const router = Router()

const {  renderMovies,renderMovie , createMovie,updateMovie,deleteMovie } = require('../controllers/movies.controller')

// Render movies
router.get('/', renderMovies)

// Render movie
router.get('/:id', validationHandler(joi.object({id: movieIdSchema}),'params'),renderMovie)

// Create movie
router.post('/new',validationHandler(joi.object({createMovieSchema})), createMovie)

//Update movie
router.put('/:id', validationHandler(joi.object({id: movieIdSchema}),'params'),  validationHandler(joi.object({updateMovieSchema})), updateMovie)

//Delete movie
router.delete('/:id',validationHandler(joi.object({id: movieIdSchema}),'params'), deleteMovie)


module.exports = router
 