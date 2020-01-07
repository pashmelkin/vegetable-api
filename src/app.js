var createError = require('http-errors')
var express = require('express')
var logger = require('morgan')
<<<<<<< HEAD
var veggiesRouter = require('./routes/veggies')
=======
var vegetablesRouter = require('./routes/vegetables')
>>>>>>> ae4cc08992f8315894775b9c976b6f6b5f9490f1

var app = express()

app.use(logger('dev'))

<<<<<<< HEAD
app.use('/v1/veggies', veggiesRouter)
=======
app.use('/v1/vegetables', vegetablesRouter)
>>>>>>> ae4cc08992f8315894775b9c976b6f6b5f9490f1

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json(err)
})

module.exports = app
