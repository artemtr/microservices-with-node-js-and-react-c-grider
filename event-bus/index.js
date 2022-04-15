import axios from 'axios'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()
app.use(bodyParser.json())

app.post('/events', (req, res) => {
  const event = req.body
  axios.post('http://localhost:4001/events', event)
  res.send({status: 'ok'})
})

app.listen(4010, () => {
  console.log('Listening on 4001')
})
