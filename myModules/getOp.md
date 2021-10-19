// create array with operator and index
const ops = ['+', '-', '*'];
const getRandomOpWithIndex = () => {
  const op = ops[getRandomNum(0, 2)];
  const index = ops.indexOf(op);
  return [op, index];
};
