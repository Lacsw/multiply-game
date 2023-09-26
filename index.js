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

    setTimeout(() => {
      btn.classList.remove('button_right');
    }, 500);
    btn.classList.add('button_right');
  } else {
    const questionInput = questionItem.input;
    setTimeout(() => {
      questionInput.classList.remove('quesiton__input_wrong');
      btn.classList.remove('button_wrong');
    }, 500);
    questionInput.classList.add('quesiton__input_wrong');
    btn.classList.add('button_wrong');
  }
}

btn.addEventListener('click', handleBtnClick);
