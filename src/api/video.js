const express = require("express")
const router = express.Router()
const {hostname,port} = require("../config")

router.get('/:id', (req, res) => {
  const params = {
    videoID: '275716143',
    thumbnail: `http://${hostname}:${port}/video_placeholder_2.jpg`,
    id: req.params.id,
    title: 'Financial Quiz level one',
    description: 'Some description ndpasdpisam pdmasspd maspomddsapmd opasm dopsamop dmopam posamdpoas mdpoas mpdosapo mdposamd poasmdpo msapod msapmd posamd posamdp msapod msapo mdpsaom dposam dposamopd msapod mpsaomdspoamdpsm',
    watched: true,
    progress: {
      played: 24.55
    }
  }
  res.status(200)
  res.json(params)
})

router.post('/:id', (req, res) => {
  res.status(200)
  res.json(req.body)
})

router.post('/:id/end', (req, res) => {
  console.log('Ihhh rapaix')
  const params = {
    date: Date.now(),
    type: 'lesson',
    title: 'Financial quiz level one',
    shareMessage: 'Hi everyone, I am here to tell you all about this new course that i\'ve been doing, and I am loving it, please try you too: \n http://www.boomcredit.com/dashboard/university',
    iconType: 'video',
    earnedPoints: 100
  }

  res.status(200)
  res.json(params)
})

module.exports = router