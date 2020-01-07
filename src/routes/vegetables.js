const express = require('express')
const vegies = require('../middleware/readVegies')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send(vegies.readVegies())
})

module.exports = router
