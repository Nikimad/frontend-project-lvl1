import getRandomNum from '../src/getRandomNum.js';

const gsd = (x, y) => {
	if (y > x) return gsd(y, x);
	if (!y) return x;
	return gsd(y, x % y);
};

export default {
  rules: 'Find the greatest common divisor of given numbers.',
  validator: (answer) => !Number.isInteger(+answer),
  getQnA: () => {
  const [num1, num2] = [getRandomNum(0, 100), getRandomNum(0, 100)];
  const quest = `${num1} ${num2}`;
  const correctAnswer = `${gsd(num1, num2)}`;
  return { quest: quest,
    correctAnswer: correctAnswer, };
  },
};
