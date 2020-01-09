const supertest = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')

const app = require('../../src/server')
const veggiesReader = require('../../src/middleware/readVeggies')

const request = supertest(app)

describe('GET /v1/veggies', function () {
  var readVeggiesStub
  before(function () {
    readVeggiesStub = sinon.stub(veggiesReader, 'readVeggies')
      .returns({ veggies: 'tomato' })
  })

  after(function () {
    veggiesReader.readVeggies.restore()
  })

  it('responds with json: async version', async function () {
    const response = await request.get('/v1/veggies')

    expect(response.status).to.equal(200)
    //  expect(response.body).to.equal({ veggies: 'tomato' })
    expect(readVeggiesStub.calledOnce).to.be.true
  })
  it('responds with json: callback version')
  it.skip('responds with json: check the send functions is called', async function () {
    const response = await request.get('/v1/veggies')

    const res = {
      send: function () {}
    }

    // mock res
    const mock = sinon.mock(res)
    // build how we expect it t work
    mock.expects('send').once()

    // verify that mock works as expected
    mock.verify()
  })
})
