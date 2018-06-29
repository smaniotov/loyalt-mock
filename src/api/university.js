const express = require("express")
const router = express.Router()
const {hostname, port} = require("../config")

router.get('/', function (req, res) {
  const {size, page} = req.query

  const param = [{
    thumbnail: `http://${hostname}:${port}/video_placeholder_2.jpg`,
    id: 2,
    title: 'Financial Quiz level one',
    points: 200,
    lessonKind: 'quiz'
  }, {
    thumbnail: `http://${hostname}:${port}/video_placeholder.jpg`,
    id: 1,
    points: 100,
    title: 'Financial Literacy',
    lessonKind: 'video'
  }]

  res.status(200)
  res.json(param.slice(0, size))
})

module.exports = router