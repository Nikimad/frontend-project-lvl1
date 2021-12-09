import messages from './cli.js';

const counter = (name, game, maxAttempts) => {
  let count = 0;
  while (count < maxAttempts) {
    if (game()) {
      count += 1;
    } else {
      return messages.luse(name);
    }
  }
  return messages.win(name);
};

const checker = (answer, correctAnswer) => {
  if (correctAnswer === answer) {
    messages.correct();
    return true;
  }
  messages.wrong(answer, correctAnswer);
  return false;
};

export default ({ rules, getQnA, validator }, maxAttempts) => {
  messages.welcome();
  const name = messages.getName();
  messages.greetings(name);
  messages.rules(rules);
  const game = () => {
    const { quest, correctAnswer } = getQnA();
    messages.question(quest);
    const answer = messages.answer();
    if (validator(answer)) {
      return false;
    }
    return checker(answer, correctAnswer);
  };
  counter(name, game, maxAttempts);
};
