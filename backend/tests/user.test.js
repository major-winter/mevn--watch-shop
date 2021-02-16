const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
  _id: userOneId,
  username: 'Test',
  email: 'test@test.com',
  password: '123456',
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, 'jason')
    }
  ]
}


beforeEach(async () => {
  await User.deleteMany()
  await new User(userOne).save()
})

test('should sign up new user', async () => {
  await request(app).post('/api/users').send({
    username: 'Mike',
    email: 'mike@test.com',
    password: '123456'
  }).expect(201)


})

test('should login existing user', async () => {
  await request(app).post('/api/users/login').send({
    email: userOne.email,
    password: userOne.password
  }).expect(200)
})
