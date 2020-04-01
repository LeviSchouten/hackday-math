const fetch = require('node-fetch');

const regularTrivia = (response, number) => {
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(res => res.json())
    .then(res => {
      if (!number) return response.send(res.text);
      numberTrivia(number, res.text, response)
    })
    .catch(err => errorHandeling(err, response))
}

const numberTrivia = (number, defaultText, response) => {
  fetch(`http://numbersapi.com/${number}?default=${defaultText}`)
    .then(res => res.text())
    .then(res => response.send(res))
    .catch(err => errorHandeling(err, response))
}

const errorHandeling = (error, response) => {
  console.log(error)
  response.send('Oops something went wrong..')
}

module.exports = regularTrivia;
