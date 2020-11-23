const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')
const { applyAuthRoutes } = require('authenticare/server')

const  require('../db/users')

const {
  userExists,
  getUserByName,
  addUser
} = require('../db/users')


applyAuthRoutes(router, {
  userExists,
  getUserByName,
  addUser
})

module.exports = router