const supertest = require('supertest')
const assert = require('assert')

const app = require('../../src/server')
const request = supertest(app)

describe('GET /v1/veggies', function () {
  it('responds with json', async function () {
    const response = await request.get('/v1/veggies')
    console.log(response.status)
    console.log(response.body)

    assert(response.status === 200)
  })
})
