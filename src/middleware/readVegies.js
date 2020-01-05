const config = require('../../config');
const data = require ('../datalayer/readData.js');

module.exports.readVegies = function(){
    return  data.readData(config.connectionString);
}
