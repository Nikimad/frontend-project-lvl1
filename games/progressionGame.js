import getRandomNum from '../src/getRandomNum.js';

const getProgression = (startNum, step, size = getRandomNum(6, 10)) => {
  const progression = [startNum];
  for (let i = 1; i < size; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const getElemofProgression = (startNum, index, step) => startNum + index * step;

export default {
  rules: 'What number is missing in the progression?',
  validator: (answer) => !Number.isInteger(+answer),
  getQnA: () => {
    const startNum = getRandomNum(0, 20);
    const step = getRandomNum(1, 100);
    const progression = getProgression(startNum, step);
    const randIndex = getRandomNum(0, progression.length - 1);
    const [head, tail] = [progression.slice(0, randIndex), progression.slice(
      randIndex + 1, progression.length,
    )];
    const quest = `${head.join(' ')} .. ${tail.join(' ')}`;
    const correctAnswer = `${getElemofProgression(startNum, randIndex, step)}`;
    return { quest, correctAnswer };
  },
};
