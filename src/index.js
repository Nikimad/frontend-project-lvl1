import messages from './cli.js';

const tryCounter = (name, attempt, maxAttempts) => {
  let count = 0;
  while (count < maxAttempts) {
    if (attempt()) {
      count += 1;
    } else {
      return messages.result.luse(name);
    }
  }
  return messages.result.win(name);
};

const answerHandler = (answer, correctAnswer) => {
  if (correctAnswer === answer) {
    messages.result.correct();
    return true;
  }
  messages.result.wrong(answer, correctAnswer);
  return false;
};

const introduction = (rules) => {
  messages.default.welcome();

  const name = messages.ask.name();

  messages.default.greetings(name);
  messages.default.rules(rules);

  return name;
};

const attempt = (getQnA, validator) => {
  const { quest, correctAnswer } = getQnA();

  messages.default.question(quest);

  const answer = messages.ask.answer();

  return validator(answer) ? answerHandler(answer, correctAnswer) : false;
};

export default (data, maxAttempts) => {
  const name = introduction(data.rules);

  tryCounter(name, () => attempt(data.getQnA, data.validator), maxAttempts);
};
