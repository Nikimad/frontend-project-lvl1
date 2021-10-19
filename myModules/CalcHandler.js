// special calc *index (0 - 2) ['+', '-', '*']
const calcHandler = (a, b, index) => {
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
