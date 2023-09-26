export class Question {
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

    if (this._counter >= 2) {
      this._cubes.classList.add('cubes_enter');
      this._statement.classList.add('question__span_enter');
    }

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
    const answer = parseInt(this._input.value);

    if (answer == this._gameNumber * this._counter) {
      this._input.replaceWith(answer);
    }
    return answer == this._gameNumber * this._counter;
  }
}
