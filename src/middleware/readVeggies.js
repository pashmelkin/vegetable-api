const config = require('../../config');
const data = require ('../datalayer/readData.js');

module.exports.readVeggies = () => {
    return  data.readData(config.connectionString);
  }
