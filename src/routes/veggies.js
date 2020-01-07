const express = require('express');
const veggiesReader = require('../middleware/readVeggies');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send(veggiesReader.readVeggies());
});

module.exports = router;
