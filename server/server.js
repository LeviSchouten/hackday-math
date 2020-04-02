const express = require('express');

const triviaRouter = require('./routes/trivia');
const exerciseRouter = require('./routes/exercise');

const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/trivia', triviaRouter);
app.use('/exercise', exerciseRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
