const express = require("express")
const cors = require('cors')
const questions = require('./questions.json')
const bodyParser = require('body-parser')
const port = 9000
const app = express()

console.log('Server running in port ' + port)

//  Middlewars
app.use(bodyParser.json())
app.use(cors({credentials: true, origin: true}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

//  Methods
app.get('/loyalt/quiz', function(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.status(200)
  res.send(JSON.stringify(questions))
})

app.post('/loyalt/quiz/submit', function(req, res) {
  console.log(req.body)
  res.status(200)
  res.send('Successfully sended')
})

//  Serve

app.listen(port, 'local.boomcredit.com')