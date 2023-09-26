const questions = document.querySelector('.questions');

class Question {
  constructor({ templateSelector, gameNumber, counter }) {
    this._gameNumber = gameNumber;
    this._counter = counter;
    this._getTemplate(templateSelector);
    this._element = this._template.cloneNode(true);
    this._input = this._element.querySelector('.question__input');
    this._setEventListeners();
  }

  _getTemplate(templateSelector) {
    this._template = document
      .querySelector(templateSelector)
      .content.querySelector('.question');
  }

  _setEventListeners() {
    this._input.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('button').click();
      }
    });
  }

  createQuestion() {
    this._statement = this._element.querySelector('.question__statement');
    this._cubes = this._element.querySelector('.cubes');

    this._statement.insertAdjacentHTML(
      'afterbegin',
      `<span class='question__span'>${this._gameNumber} x ${this._counter} =</span>`
    );

    for (var i = 0; i < this._gameNumber; i++) {
      const cube = document.createElement('div');
      cube.className = 'cube';
      this._cubes.append(cube);
    }

    return this._element;
  }

  checkAnswer() {
    this._answer = this._input.value;
    if (this._answer == this._gameNumber * this._counter) {
      this._input.replaceWith(this._answer);
    }
    return this._answer == this._gameNumber * this._counter;
  }
}

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
  }
}

btn.addEventListener('click', handleBtnClick);
