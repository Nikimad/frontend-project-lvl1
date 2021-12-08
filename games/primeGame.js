import getRandomNum from '../src/getRandomNum.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  }
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

export default {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  validator: (answer) => answer !== 'yes' && answer !== 'no',
  getQnA: () => {
  const quest = getRandomNum(1, 100);
  const correctAnswer = isPrime(quest) ? 'yes' : 'no';
  return { quest, correctAnswer };
  },
};
