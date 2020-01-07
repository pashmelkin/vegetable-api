const assert = require('assert')
const veggies = require('../../src/middleware/readVeggies')

describe('readVeggies', function () {
    it('should return  when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })

})
