import innerCalc from '/CalcHandler.js'
import getRandomNum from '/getNum.js'
import getRandomOpWithIndex from '/getOp.js'

// create aaray with 'expression' and result of this expression
export const getRandomExp = () => {
  const foperand = getRandomNum(0, 100);
  const soperand = getRandomNum(0, 100);
  const [operator, index] = getRandomOpWithIndex();
  const exp = `${foperand + operator + soperand}`;
  const expBase = [exp, `${innerCalc(foperand, soperand, index)}`]
  return expBase;
};
