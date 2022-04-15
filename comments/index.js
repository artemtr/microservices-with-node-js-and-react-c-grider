const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {}

app.post('/events', (req, res) => {
  console.log(req.body)
})

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id])
})

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const {content} = req.body

  const comments = commentsByPostId[req.params.id] || []

  comments.push({id: commentId, content})

  commentsByPostId[req.params.id] = comments

  await axios.post(`http://localhost:4010/events/`, {
    data: {id: req.params.id, comment: {id: commentId, content}},
    type: 'CommentCreated',
  })

  res.status(201).send()
})

app.listen(4001, () => {
  console.log('Comments 4001')
})
