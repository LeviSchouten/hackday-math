const express = require('express');
const { generateExercise } = require('../modules/index');

const router = express.Router();

router.get('/', (req, res) => { // removed next
  const exercise = generateExercise();
  res.json(exercise);
});

module.exports = router;
