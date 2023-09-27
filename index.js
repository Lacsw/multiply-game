import { Question } from './components/Question.js';

const settings = {
  templateSelector: '.question-template',
  gameNumber: 6,
  counter: 1,
};

const questions = document.querySelector('.questions');
const btn = document.querySelector('button');

let questionItem = new Question(settings);
createNewQuestion();

function createNewQuestion() {
  questionItem = new Question(settings);
  const newQuestion = questionItem.createQuestion();
  questions.append(newQuestion);
  newQuestion.querySelector('.question__input').focus();
}

function restartGame() {
  const allQuestions = document.querySelectorAll('.question');
  settings.counter = 1;

  allQuestions.forEach((question) => {
    question.remove();
  });
  questionItem = new Question(settings);
  questions.append(questionItem.createQuestion());

  setTimeout(() => {
    btn.classList.remove('button_disabled');
  }, 500);
  btn.classList.add('button_disabled');
}

function showRightButton() {
  setTimeout(() => {
    btn.classList.remove('button_right');
  }, 500);
  btn.classList.add('button_right');
}

function showWrongButton() {
  const questionInput = questionItem.input;
  setTimeout(() => {
    questionInput.classList.remove('question__input_wrong');
    btn.classList.remove('button_wrong');
  }, 500);
  questionInput.classList.add('question__input_wrong');
  btn.classList.add('button_wrong');
}

function handleBtnClick() {
  if (questionItem.checkAnswer()) {
    settings.counter++;
    createNewQuestion();
    showRightButton();

    if (settings.counter > 10) {
      restartGame();
    }
  } else {
    showWrongButton();
  }
}

btn.addEventListener('click', handleBtnClick);
