const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({limit:'50mb'}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/stdout', (req, res) => {
  console.log(JSON.stringify(req.body))
  res.send('Log!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})