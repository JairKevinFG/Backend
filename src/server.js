const express = require('express')
const morgan = require('morgan')
const app = express()
const {logErrors,errorHandler,wrapErrors} = require('./utils/middleware/errorHandlers')
const notFoundHandler= require('../src/utils/middleware/notFoundHandler')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//routes
app.use('/movies',require('./routes/movies.routes'))

//catch 404
app.use(notFoundHandler)

// Errors middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)



module.exports = app;
