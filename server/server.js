const express = require('express')

const { regularTrivia } = require('./modules')

const app = express()
const port = 5000

app.get('/:number?', (req, res) => {
  regularTrivia(res, req.params.number)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
