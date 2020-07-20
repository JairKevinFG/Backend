const express = require('express')
const router = express.Router()
const joi = require('@hapi/joi')
const {movieIdSchema,createMovieSchema,updateMovieSchema} = require('../utils/schemas/movies')
const validationHandler = require('../utils/middleware/validationHandler')

const MoviesService = require('../services/movies')
const moviesService = new MoviesService()

function moviesApi(app){
    
    app.use('/movies', router);
   
    // Render movies
    router.get('/', async (req,res,next) => {
        const {tags} = req.query
        try {
            const movies = await moviesService.renderMovies({tags})
            res.status(200).json({ 
                data: movies,
                message : 'render movies'
            })
        } catch (err) {
            next(err)
        }
    })

    // Render movie
    router.get('/:id', validationHandler(joi.object({id: movieIdSchema}),'params'),async (req,res,next) => {
        const {id} = req.params
        try {
            const movie = await moviesService.renderMovie({id})
            res.status(200).json({ 
                data: movie,
                message : 'movie'
            })
        } catch (err) {
            next(err)
        }
    })

    // Create movie
    router.post('/new',validationHandler(joi.object({createMovieSchema})), async (req,res,next) => {
        const {body : movie} = req
        try {
            const createdMovieId = await moviesService.createMovie({movie})
            res.status(201).json({ 
                data: createdMovieId,
                message : 'movie created'
            })
        } catch (err) {
            next(err)
        }
    })

    //Update movie
    router.put('/:id', validationHandler(joi.object({id: movieIdSchema}),'params'),  validationHandler(joi.object({updateMovieSchema})), async (req,res,next) => {
        const {id} = req.params
        const {movie} = req.body
        try {
            const updatedMovieId = await moviesService.updateMovie({id,movie})
            res.status(200).json({ 
                data: updatedMovieId,
                message : 'movie updated'
            })
        } catch (err) {
            next(err)
        }
    })

    //Delete movie
    router.delete('/:id',validationHandler(joi.object({id: movieIdSchema}),'params'), 
    async (req,res,next) => {
        const {id} = req.params
        try {
            const deletedMovieId = await moviesService.deleteMovie({id})
            res.status(200).json({ 
                data: deletedMovieId,
                message : 'movie deleted'
            })
        } catch (err) {
            next(err)
        }
    
            
    })

    }


module.exports = moviesApi
 