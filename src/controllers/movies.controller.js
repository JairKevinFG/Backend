const moviesCtrl = {}
const MoviesService = require('../services/movies')
const moviesService = new MoviesService()

moviesCtrl.renderMovies = async (req,res,next) => {
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
}

moviesCtrl.renderMovie = async (req,res,next) => {
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
}

moviesCtrl.createMovie = async (req,res,next) => {
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
}

moviesCtrl.updateMovie = async (req,res,next) => {
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
}
moviesCtrl.deleteMovie = async (req,res,next) => {
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
 

}

module.exports = moviesCtrl