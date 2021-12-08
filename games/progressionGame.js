import getRandomNum from '../src/getRandomNum.js';

const getProgression = (startNum, step, size = 10) => {
  const progression = [startNum];
  for (let i = 1; i < size; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const blurElemofProgression = (progression, index) => {
  const progressionWhithBluredElem = [];
  for (let i = 0; i < progression.length; i += 1) {
    if (i === index) {
      progressionWhithBluredElem.push('..');
    } else {
      progressionWhithBluredElem.push(progression[i]);
    }
  }
  return progressionWhithBluredElem.join(' ');
}

const getElemofProgression = (startNum, index, step) => startNum + index * step;

const progressionGame = {
  rules: 'What number is missing in the progression?',
  validator: (answer) => !Number.isInteger(+answer),
  getQnA: () => {
    const startNum = getRandomNum(0, 20);
    const step = getRandomNum(1, 100);
    const progression = getProgression(startNum, step);
    const indexOfElem = getRandomNum(0, progression.length - 1)
    const quest = blurElemofProgression(progression, indexOfElem);
    const correctAnswer= `${getElemofProgression(startNum, indexOfElem, step)}`;
    return { quest, correctAnswer };
  },
};
