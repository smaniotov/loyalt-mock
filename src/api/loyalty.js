const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  const params = {
    points: 300,
    currentLevel: 'gold',
    nextLevel: 'platina',
    pointsToNextLevel: 200,
    loansToNextLevel: 2,
    totalLoans: 5
  }
  res.status(200)
  res.json(params)
})

module.exports = router