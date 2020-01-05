const config = require('../../config');
const data = require ('../datalayer/readData.js');

module.exports.readVegies = () => {
    return  data.readData(config.connectionString);
  }
