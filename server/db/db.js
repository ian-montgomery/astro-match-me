const connection = require('./connection')

function getProfiles (db = connection) {
  return db('profiles').select()
}

function addProfile (person, db = connection) {
  return db('profiles').insert(person)
}

module.exports = {
  getProfiles,
  addProfile
}
