const express = require("express")
const router = express.Router()
const {hostname,port} = require("../config")

router.get('/:id', (req, res) => {
  const params = {
    videoID: '275716143',
    thumbnail: `http://${hostname}:${port}/video_placeholder_2.jpg`,
    id: req.params.id,
    title: 'Financial Quiz level one',
    description: 'Some description',
    progress: {
      stopPoint: 2.2,
      ended: false
    }
  }
  res.status(200)
  res.json(params)
})

router.post('/:id', (req, res) => {
  res.status(200)
  res.json(req.body)
})

module.exports = router