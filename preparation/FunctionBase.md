const ops = ['+', '-', '*'];

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOpWithIndex = () => {
  const op = ops[getRandomNum(0, 2)];
  const index = ops.indexOf(op);
  return [op, index];
};

const innerCalc = (a, b, index) => {
  let result;
  switch (index) {
    case 0:
      result = a + b;
      break;
    case 1:
      result = a - b;
      break;
    case 2:
      result = a * b;
      break;
    default:
      result = 'Error';
  }
  return result;
};

const getRandomExp = () => {
  const foperand = getRandomNum(0, 100);
  const soperand = getRandomNum(0, 100);
  const [operator, index] = getRandomOpWithIndex();
  const exp = `${foperand + operator + soperand}`;
  const expBase = [exp, `${innerCalc(foperand, soperand, index)}`]
  return expBase;
}
    
const answerCheck = (useranswer,value) => useranswer === value;
