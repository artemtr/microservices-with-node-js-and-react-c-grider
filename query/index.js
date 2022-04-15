const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const info = {}

app.get('/posts', (req, res) => {
  res.send(info)
})

app.post('/events', (req, res) => {
  const {type, data} = req.body
  console.log(type, data)
  if (type === 'PostCreated') {
    info[data.id] = data
  }
  if (type === 'CommentCreated') {
    info[data.id].comments.push(data.comment)
  }
  res.send(info)
})

app.listen(4011, () => {
  console.log('Query 4011')
})
