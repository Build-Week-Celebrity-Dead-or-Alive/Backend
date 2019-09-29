const db = require('../data/dbConfig')

module.exports = {
  getAllCelebs,
  findBy
}

function getAllCelebs () {
  return db('celebs')
}

function findBy (filter) {
  return db('celebs').where(filter)
}
