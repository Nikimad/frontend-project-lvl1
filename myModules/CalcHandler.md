import sum, dif, mul from '/Math.js'
// special calc *index (0 - 2) ['+', '-', '*']
const calcHandler = (a, b, index) => {
  let result;
  switch (index) {
    case 0:
      result = sum(a, b);
      break;
    case 1:
      result = dif(a, b);
      break;
    case 2:
      result = mul(a, b);
      break;
    default:
      result = 'Error';
  }
  return result;
};
