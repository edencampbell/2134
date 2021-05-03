const express = require('express')
const app = express()
const port = 1516

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/drive', (req, res) => {
  res.send("I'm driving!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy.org/${port}`)
})