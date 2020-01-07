var createError = require('http-errors')
var express = require('express')
var logger = require('morgan')
var cors = require('cors')
var veggiesRouter = require('./routes/veggies')
var app = express()

app.use(logger('dev'))

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false
  })
)

app.use('/v1/veggies', veggiesRouter)

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
