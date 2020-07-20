const express = require('express')
const morgan = require('morgan')
const app = express()
const {logErrors,errorHandler,wrapErrors} = require('./utils/middleware/errorHandlers')
const notFoundHandler= require('../src/utils/middleware/notFoundHandler')
const moviesApi = require('./routes/movies.routes.js');



app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//routes
moviesApi(app);

//catch 404
app.use(notFoundHandler)

// Errors middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)



module.exports = app;
