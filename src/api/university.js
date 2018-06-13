const express = require("express")
const router = express.Router()
const {hostname, port} = require("../config")

router.get('/', function (req, res) {
  console.log(`page: ${req.query.page}`)
  console.log(`size: ${req.query.size}`)

  res.status(200)
  res.json([{
    thumbnail: `http://${hostname}:${port}/video_placeholder.jpg`,
    id: 1,
    title: 'Financial Literacy'
  }, {
    thumbnail: `http://${hostname}:${port}/video_placeholder_2.jpg`,
    id: 2,
    title: 'Financial Quiz level one'
  }])
})

module.exports = router