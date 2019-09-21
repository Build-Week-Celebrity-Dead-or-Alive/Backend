const db = require('../data/dbConfig')

module.exports = {
  getUsers,
  addUser,
  findBy,
  addPointsToUser,
  deleteUser
}

function getUsers () {
  return db('users')
}

async function addUser (user) {
  let ids = await db('users').insert(user, 'id')
  const [id] = ids
  return findBy({ id })
}

function findBy (filter) {
  return db('users').where(filter)
}

function addPointsToUser (changes, id) {
  return db('users')
    .update(changes)
    .where({ id })
}

function deleteUser (id) {
  return db('users')
    .del()
    .where({ id })
}
