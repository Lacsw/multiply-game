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

  const input = newQuestion.querySelector('.question__input');
  input.focus();
  input.addEventListener('input', () => {
    const isValid = isInputValid();
    btn.disabled = !isValid;
  });
}

function restartGame() {
  const allQuestions = document.querySelectorAll('.question');
  settings.counter = 1;

  allQuestions.forEach((question) => {
    question.remove();
  });
  createNewQuestion();
}

function showRightButton() {
  setTimeout(() => {
    btn.classList.remove('button_right');
    btn.disabled = true;
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

function isInputValid() {
  const inputValue = questionItem.input.value;
  return /^\d+$/.test(inputValue);
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
