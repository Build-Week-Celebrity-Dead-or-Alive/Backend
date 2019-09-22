const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Users = require('../users/usersHelper')
const secrets = require('../config/secrets')


router.post('/register', (req, res) => {
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash

  Users.addUser(user)
    .then(saved => {
      res.status(201).json({ message: 'User Registered' })
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Cannot register new user' })
    })
})



router.post('/login', (req, res) => {
  let { username, password } = req.body

  Users.findBy({ username })
    .first() 
    .then(user => {
      console.log('user', user)
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
       
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          name: user.name,
          points: user.points,
          token
          
        })
      } else {
        res.status(401).json({ message: 'Access Denied' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

function generateToken (user) {
  const payload = {
    
    subject: user.id, 
    username: user.username,
    name: user.name,
    points: user.points
  }
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router
