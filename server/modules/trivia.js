const fetch = require('node-fetch');

const numberTrivia = (number, defaultText, response) => {
  fetch(`http://numbersapi.com/${number}?default=${defaultText}`)
    .then((res) => res.text())
    .then((res) => response.json({ fact: res }))
    .catch(() => response.send('Oops something went wrong..'));
};

const regularTrivia = (response, number) => {
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((res) => res.json())
    .then((res) => {
      if (!number) return response.json({ fact: res.text });
      return numberTrivia(number, res.text, response);
    })
    .catch(() => response.send('Oops something went wrong..'));
};

module.exports = regularTrivia;
