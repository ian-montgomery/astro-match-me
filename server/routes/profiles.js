const express = require('express')
const router = express.Router()

const db = require('../db/db')


router.get('/', (req, res) => {
  return db.getProfiles()
    .then(profiles => {
      res.json(profiles)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  console.log(req.body);
  return db.addProfile(req.body) 
    .then((ids) => {
      console.log(ids);
      res.json({})
    })
})

module.exports = router
