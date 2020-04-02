const express = require('express');
const fetchUsers = require('../modules/users')

const router = express.Router();

router.get('/', (req, res) => {
  fetchUsers(res);
});

module.exports = router;
