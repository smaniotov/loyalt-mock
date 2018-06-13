const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const {port, hostname} = require("./config")
const {quiz, university} = require("./api")

const app = express()

//  Middlewars
app.use(bodyParser.json())
app.use(cors({
  credentials: true,
  origin: true
}))
app.use(express.static('public'))

//  Endpoints
app.use('/loyalty/quiz', quiz)

app.use('/loyalty/university', university)

//  Serve
app.listen(port, hostname, 1, () => {
  console.log('Server running in port ' + port)
})