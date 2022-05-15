import readlineSync from 'readline-sync';

export default {
  default: {
    welcome: () => console.log('Welcome to the Brain Games!'),
    greetings: (name) => console.log(`Hello, ${name}`),
    rules: (rules) => console.log(rules),
    question: (quest) => console.log(`Question: ${quest}`),
  },
  result: {
    correct: () => console.log('Correct!'),
    wrong: (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`),
    luse: (name) => console.log(`Let's try again, ${name}!`),
    win: (name) => console.log(`Congratulations, ${name}!`),
  },
  ask: {
    name: () => readlineSync.question('May I have your name? '),
    answer: () => readlineSync.question('Your answer: '),
  },
};
