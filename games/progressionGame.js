import getRandomNum from '../src/getRandomNum.js';

const getProgression = (startNum, step, size = 10) => {
  const progression = [startNum];
  for (let i = 1; i < size; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const blurElemofProgression = (progression, index) => {
  progression[index] = '..';
  return progression.join(' ');
};

const getElemofProgression = (startNum, index, step) => startNum + index * step;
//GameModule
export default {
  rules: 'What number is missing in the progression?',
  validator: (answer) => !Number.isInteger(+answer),
  getQnA: () => {
    const startNum = getRandomNum(0, 20);
    const step = getRandomNum(1, 100);
    const progression = getProgression(startNum, step);
    const indexOfElem = getRandomNum(0, progression.length)
    const quest = blurElemofProgression(progression, indexOfElem);
    const bluredElem = `${getElemofProgression(startNum, indexOfElem, step)}`;
    return {quest: quest,
     correctAnswer: bluredElem,
    };
  },
};
