import readlineSync from 'readline-sync';

export default {
  welcome: () => console.log('Welcome to the Brain Games!'),
  getName: () => readlineSync.question('May I have your name? '),
  greetings: (name) => console.log(`Hello, ${name}`),
  rules: (rules) => console.log(rules),
  question: (quest) => console.log(`Question: ${quest}`),
  answer: () => readlineSync.question('Your answer: '),
  correct: () => console.log('Correct!'),
  wrong: (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`),
  luse: (name) => console.log(`Let's try again, ${name}!`),
  win: (name) => console.log(`Congratulations, ${name}!`),
};
