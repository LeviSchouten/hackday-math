const fetch = require('node-fetch');

const fetchUsers = (response) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => response.send(res))
}

module.exports = fetchUsers;
