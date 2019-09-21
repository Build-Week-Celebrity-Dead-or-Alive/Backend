const router = require('express').Router()

const Users = require('./usersHelper')

router.get('/', (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({ message: 'Cannot get users' })
    })
})

router.get('/:id', (req, res) => {
  let { id } = req.params

  Users.findBy({ id })
    .first()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json('Cannot get that user')
    })
})

router.put('/:id', (req, res) => {
  const changes = req.body
  const { id } = req.params
  Users.addPointsToUser(changes, id)
    .then(user => {
      res.status(200).json({ message: 'You earned a point' })
    })
    .catch(err => {
      res.status(500).json({ message: 'Cannot add points' })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  Users.addPointsToUser(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error deleting user' })
    })
})

module.exports = router
