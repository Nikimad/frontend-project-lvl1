import getRandomNum from '../src/getRandomNum.js';

const mathematics = [
  (a, b, optional = 'sum') => (optional !== 'exp' ? `${a + b}` : `${a} + ${b}`),
  (a, b, optional = 'dif') => (optional !== 'exp' ? `${a - b}` : `${a} - ${b}`),
  (a, b, optional = 'mul') => (optional !== 'exp' ? `${a * b}` : `${a} * ${b}`),
];

export default {
  rules: 'What is the result of the expression?',
  validator: (answer) => !Number.isInteger(+answer),
  getQnA: () => {
    const [operand1, operand2] = [getRandomNum(0, 100), getRandomNum(0, 100)];
    const randExp = mathematics[getRandomNum(0, 2)];
    const [quest, correctAnswer] = [randExp(operand1, operand2, 'exp'), randExp(operand1, operand2)];
    return { quest, correctAnswer };
  },
};
