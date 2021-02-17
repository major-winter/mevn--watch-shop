const expect = require('chai').expect
const request = require('supertest')
const app = require('../src/server')
const User = require('../src/models/userModel')
const mongoose = require('mongoose')

describe('test route', () => {
  before(async function () {
    await mongoose.connect('mongodb+srv://jason:1234@cluster0.zdrhc.mongodb.net/mevn-watch-shop-test', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    await User.deleteMany()
  })

  it('create new user', async () => {
    let user = new User({
      username: 'Zi',
      email: 'chii@test.com',
    })
    await user.save()
    expect(user).to.be.a('object')
  })
})
