const express = require('express');
const router = express.Router();

const { generateExercise } = require('../modules/index');

router.get('/', (req, res, next) => {
  const exercise = generateExercise();
  res.json(exercise);
})

module.exports = router
