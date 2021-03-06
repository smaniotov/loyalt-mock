const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const {port,hostname} = require("./config")
const {quiz,university,video, loyalty} = require("./api")

const app = express()

//  Middlewars
app.use(bodyParser.json())
app.use(cors({
  credentials: true,
  origin: true
}))
app.use(express.static('public'))

//  Endpoints
app.use('/lesson/quiz', quiz)

app.use('/lesson/university', university)

app.use('/lesson/video', video)

app.use('/loyalty', loyalty)

//  Serve
app.listen(port)
console.log('Server running on port ' + port)