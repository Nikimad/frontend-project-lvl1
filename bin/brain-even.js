#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (num) => num % 2 === 0;
const feedback = (num, useranswer) => {
  if (useranswer !== 'yes' && useranswer !== 'no') {
    return null;
  }
  if (!isEven(num) && useranswer === 'yes') {
    return 1;
  }
  if (isEven(num) && useranswer === 'no') {
    return 2;
  }
  return 3;
};
// greeting
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
// rules
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// game
const brainEvengame = () => {
  let randomnum;
  for (let i = 0; i < 3; i += 1) {
    randomnum = getRandomNum(1, 100);
    console.log(`Question: ${randomnum}`);
    const answer = readlineSync.question('Your answer: ');
    if (feedback(randomnum, answer) === null || feedback(randomnum, answer) === 2) {
      return `Let's try again, ${name}`;
    }
    if (feedback(randomnum, answer) === 3) {
      console.log('Correct');
    }
    if (feedback(randomnum, answer) === 1) {
      return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`;
    }
  }
  return `Congratulations, ${name}`;
};
// gameStart
console.log(brainEvengame());
