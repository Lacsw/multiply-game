import { Question } from './components/Question.js';
const questions = document.querySelector('.questions');

const settings = {
  templateSelector: '.question-template',
  gameNumber: 6,
  counter: 1,
};

let questionItem = new Question(settings);

function createNewQuestion() {
  const newQuestion = questionItem.createQuestion();
  questionItem.checkAnswer();

  return newQuestion;
}

questions.append(createNewQuestion());

const btn = document.querySelector('button');
function handleBtnClick() {
  if (questionItem.checkAnswer()) {
    settings.counter++;
    questionItem = new Question(settings);
    const next = questionItem.createQuestion();
    questions.append(next);
    next.querySelector('.question__input').focus();
  }
}

btn.addEventListener('click', handleBtnClick);
