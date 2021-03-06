import getRandomNum from '../src/getRandomNum.js';

const gcd = (x, y) => {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
};

export default {
  rules: 'Find the greatest common divisor of given numbers.',
  validator: (answer) => !Number.isNaN(+answer),
  getQnA: () => {
    const [num1, num2] = [getRandomNum(0, 100), getRandomNum(0, 100)];
    const quest = `${num1} ${num2}`;
    const correctAnswer = `${gcd(num1, num2)}`;
    return { quest, correctAnswer };
  },
};
