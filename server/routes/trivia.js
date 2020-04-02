const express = require('express');
const router = express.Router();

const { regularTrivia } = require('../modules/index');

router.get('/:number?', (req, res, next) => {
  regularTrivia(res, req.params.number);
})

module.exports = router
