const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex')
  const {title} = req.body

  posts[id] = {
    id,
    title,
    comments: [],
  }
  console.log(posts)
  await axios.post(`http://localhost:4010/events/`, {
    data: posts[id],
    type: 'PostCreated',
  })

  res.status(201).send(posts[id])
})

app.listen(4000, () => {
  console.log('Post 4000')
})
