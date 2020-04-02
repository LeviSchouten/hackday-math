const express = require('express');
const { regularTrivia } = require('../modules/index');

const router = express.Router();

router.get('/:number?', (req, res) => { // removed next
  regularTrivia(res, req.params.number);
});

module.exports = router;
