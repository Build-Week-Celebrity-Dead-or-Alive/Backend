const router = require('express').Router()

const Celebs = require('./celebsHelper')

router.get('/', (req, res) => {
  console.log('celebs')
  Celebs.getAllCelebs()
    .then(resp => {
      res.status(200).json(resp)
    })
    .catch(err => res.send(err))
})

router.get('/:id', (req, res) => {
  let { id } = req.params

  Celebs.findBy({ id })
    .first()
    .then(celeb => {
      console.log('celeb', celeb)
      res.status(200).json(celeb)
    })
    .catch(error => {
      res.status(500).json('cannot get the celebrity')
    })
})

module.exports = router
