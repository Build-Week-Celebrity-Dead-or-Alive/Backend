const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

// const authenticate = require('../auth/authenticate_middleware.js');
// const authRouter = require('./auth/authRouter.js');
const celebsRouter = require('./celebs/celebsRouter.js')
const usersRouter = require('./users/usersRouter.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// server.use('/auth', authRouter);
server.use('/celebs', celebsRouter)
server.use('/users', usersRouter)

// server.use('/', (req, res) => {
//   res.send(`<h2>Api Home</h2>`)
// })

module.exports = server
