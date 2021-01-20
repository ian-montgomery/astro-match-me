const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')
const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  getUserByName,
  createUser
} = require('../db/users')

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

module.exports = router
