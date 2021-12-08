import getRandNum from './src/getRandomNum.js';

const isEven = (num) => num % 2 === 0;

export default {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  validator: (answer) => answer !== 'yes' && answer !== 'no',
  getQnA: () => {
    const quest = getRandomNum(0, 100);
    const correctAnswer = isEven(quest) ? 'yes' : 'no';
    return {quest, correctAnswer};
  },
};
