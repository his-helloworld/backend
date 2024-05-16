const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/login', (req, res) =>  {
    res.send("Please LOgin");
});

app.get('/chai', (req, res) => {
    res.send("JOydeb Roy");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})