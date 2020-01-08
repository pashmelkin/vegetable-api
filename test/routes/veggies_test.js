const supertest = require('supertest')

const app = require('../../src/server')
const request = supertest(app)

describe('GET /v1/veggies', function () {
  it('responds with json', function (done) {
    request
      .get('/v1/veggies')
      .expect(200, done)
  })
})
