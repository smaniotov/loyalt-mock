const express = require("express")
const router = express.Router()
const questions = require('./questions.json')

router.get('/:id', function (req, res) {
  res.status(200)
  res.json(questions)
})

router.post('/:id/submit', function(req, res) {
  console.log(req.body)
  res.status(200)
  res.json(req.body)
})

router.get('/:id/summary', function(req, res) {
  const params = {
    questionAmount: 5,
    averageResult: 3,
    userResult: 2,
    pointsEarned: 60
  }

  res.status(200)
  res.json(params)
})

module.exports = router