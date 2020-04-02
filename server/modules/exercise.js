const OPERATORS = ['+', '-', '*']; // add divider later

const generateNumber = (max) => Math.floor(Math.random() * max)

const generateOperator = () => OPERATORS[generateNumber(OPERATORS.length)]

const generateValues = () => ({
  number1: generateNumber(100),
  number2: generateNumber(100),
  operator: generateOperator()
})

const generateSolution = (exercise) => {
  const { number1, number2, operator } = exercise;
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
}

const addSolution = (exercise) => ({
  ...exercise,
  solution: generateSolution(exercise)
})

const generateExercise = () => addSolution(generateValues())

module.exports = generateExercise;
