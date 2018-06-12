const express = require("express")
const cors = require('cors')
const questions = require('./questions.json')
const bodyParser = require('body-parser')
const port = 9000
const hostname = 'local.boomcredit.com'
const app = express()

console.log('Server running in port ' + port)

//  Middlewars
app.use(bodyParser.json())
app.use(cors({
  credentials: true,
  origin: true
}))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.static('public'))

//  Methods
app.get('/loyalty/quiz/:id', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.status(200)
  res.send(JSON.stringify(questions))
})

app.post('/loyalty/quiz/:id/submit', function (req, res) {
  console.log(req.body)
  res.status(200)
  res.json(req.body)
})

app.get('/loyalty/quiz/:id/summary', function (req, res) {
  const params = {
    questionAmount: 5,
    averageResult: 3,
    userResult: 2,
    pointsEarned: 60
  }

  res.status(200)
  res.json(params)
})

app.get('/loyalty/university', function (req, res) {
  console.log(`page: ${req.query.page}`)
  console.log(`size: ${req.query.size}`)

  res.status(200)
  res.json([{
    thumbnail: `http://${hostname}:${port}/video_placeholder.jpg`,
    id: 1,
    title: 'Titulo'
  }, {
    thumbnail: `http://${hostname}:${port}/video_placeholder_2.jpg`,
    id: 2,
    title: 'Titulo 2'
  }])
})

//  Serve
app.listen(port, hostname)